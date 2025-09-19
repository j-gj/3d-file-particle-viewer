import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class GLBPointCloudViewer {
    constructor(containerElement, options = {
        particleSize: 0.1,
        particleColor: '#372CD5',
        backgroundColor: '#ffffff',
        autoRotate: true,
        rotationSpeed: 0.1,
        url: 'https://example.com/particle-cloud.glb',
        onProgress: null,
        onError: null,
    }) {
        this.container = containerElement;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 8000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        this.controls = null;
        this.particles = null;
        this.pointCloudData = null;
        this.particleTexture = this.createParticleTexture();
        this.animationId = null;
        this.resizeObserver = null;
        this.worker = null;

        this.settings = {
            url: options.url,
            particleSize: options.particleSize,
            particleColor: options.particleColor,
            backgroundColor: options.backgroundColor,
            autoRotate: options.autoRotate,
            rotationSpeed: options.rotationSpeed,
            onProgress: options.onProgress,
            onError: options.onError,
        };

        this.init();
    }

    init() {
        if (!this.container) {
            console.error('Container element is required');
            return;
        }

        // Get container dimensions
        const rect = this.container.getBoundingClientRect();
        const width = rect.width || 800;
        const height = rect.height || 600;

        // Setup renderer
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(new THREE.Color(this.settings.backgroundColor));
        this.container.appendChild(this.renderer.domElement);

        // Setup camera with correct aspect ratio
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.camera.position.set(5, 5, 5);
        this.camera.lookAt(0, 0, 0);

        // Setup orbit controls
        this.setupControls();

        // Setup lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
        this.scene.add(ambientLight);

        // Setup resize observer for container changes
        this.setupResizeObserver();

        // Setup Web Worker
        this.setupWorker();

        // Load the point cloud from URL
        this.loadGLBPointCloudFromURL();

        // Start render loop
        this.animate();
    }

    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = this.settings.autoRotate;
        this.controls.autoRotateSpeed = this.settings.rotationSpeed;
        this.controls.screenSpacePanning = true;
        this.controls.enableZoom = false;
        this.controls.update();
    }

    setupResizeObserver() {
        if (typeof ResizeObserver !== 'undefined') {
            let resizeTimeout;

            this.resizeObserver = new ResizeObserver(entries => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    for (let entry of entries) {
                        const { width, height } = entry.contentRect;

                        if (width > 0 && height > 0) {
                            this.onResize(width, height);
                        }
                    }
                }, 16);
            });

            this.resizeObserver.observe(this.container);
        } else {
            this.windowResizeHandler = () => {
                if (this.container) {
                    const rect = this.container.getBoundingClientRect();
                    this.onResize(rect.width, rect.height);
                }
            };
            window.addEventListener('resize', this.windowResizeHandler);
        }
    }

    onResize(width, height) {
        if (width > 0 && height > 0 && this.camera && this.renderer) {
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height, false);

            if (this.scene) {
                this.renderer.render(this.scene, this.camera);
            }
        }
    }

    setupWorker() {
        // Create inline worker for GLB processing
        const workerCode = `
            let THREE;
            let GLTFLoader;

            // Import Three.js modules in worker
            importScripts('https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js');
            
            // Import GLTFLoader
            self.onmessage = async function(e) {
                const { arrayBuffer, chunkSize = 5000 } = e.data;
                
                try {
                    // Create loader
                    const loader = new THREE.GLTFLoader();
                    
                    // Parse GLB in worker
                    loader.parse(arrayBuffer, '', (gltf) => {
                        // Find point cloud object
                        let pointCloudObject = null;
                        gltf.scene.traverse((child) => {
                            if (child instanceof THREE.Points) {
                                pointCloudObject = child;
                            }
                        });
                        
                        if (!pointCloudObject) {
                            self.postMessage({ 
                                success: false, 
                                error: 'No point cloud found in GLB file' 
                            });
                            return;
                        }
                        
                        // Extract data
                        const positions = pointCloudObject.geometry.attributes.position.array;
                        const metadata = pointCloudObject.userData.particleViewer || {};
                        const totalParticles = positions.length / 3;
                        
                        // Send initial metadata
                        self.postMessage({
                            type: 'metadata',
                            success: true,
                            metadata: metadata,
                            totalParticles: totalParticles
                        });
                        
                        // Send positions in chunks
                        for (let i = 0; i < positions.length; i += chunkSize * 3) {
                            const chunkEnd = Math.min(i + chunkSize * 3, positions.length);
                            const chunk = positions.slice(i, chunkEnd);
                            
                            self.postMessage({
                                type: 'chunk',
                                success: true,
                                chunk: chunk.buffer,
                                chunkIndex: Math.floor(i / (chunkSize * 3)),
                                totalChunks: Math.ceil(positions.length / (chunkSize * 3)),
                                startIndex: i
                            }, [chunk.buffer]);
                        }
                        
                        // Send completion message
                        self.postMessage({
                            type: 'complete',
                            success: true
                        });
                        
                    }, (error) => {
                        self.postMessage({ 
                            success: false, 
                            error: 'GLB parsing failed: ' + error.message 
                        });
                    });
                    
                } catch (error) {
                    self.postMessage({ 
                        success: false, 
                        error: 'Worker error: ' + error.message 
                    });
                }
            };
        `;

        const blob = new Blob([workerCode], { type: 'application/javascript' });
        this.worker = new Worker(URL.createObjectURL(blob));

        this.worker.onmessage = (e) => {
            this.handleWorkerMessage(e.data);
        };

        this.worker.onerror = (error) => {
            console.error('Worker error:', error);
            if (this.settings.onError) {
                this.settings.onError(new Error('Worker failed: ' + error.message));
            }
        };
    }

    handleWorkerMessage(data) {
        if (!data.success) {
            console.error('Worker error:', data.error);
            if (this.settings.onError) {
                this.settings.onError(new Error(data.error));
            }
            return;
        }

        switch (data.type) {
            case 'metadata':
                this.pointCloudData = data.metadata;
                this.totalParticles = data.totalParticles;
                this.initializeGeometry();
                break;

            case 'chunk':
                this.processChunk(data);
                break;

            case 'complete':
                this.finalizeGeometry();
                break;
        }
    }

    initializeGeometry() {
        // Clear existing particles
        if (this.particles) {
            this.scene.remove(this.particles);
            this.particles.geometry.dispose();
            this.particles.material.dispose();
        }

        // Create empty geometry
        this.geometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(this.totalParticles * 3);
        this.currentParticleCount = 0;

        // Calculate particle size
        const originalModelSize = this.pointCloudData.originalModelSize || 1;
        const baseSize = this.settings.particleSize * (originalModelSize / 100);

        // Create material
        const material = new THREE.PointsMaterial({
            color: new THREE.Color(this.settings.particleColor),
            size: baseSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            map: this.particleTexture,
            alphaTest: 0.5
        });

        // Create particles with empty geometry
        this.particles = new THREE.Points(this.geometry, material);
        this.scene.add(this.particles);
    }

    processChunk(data) {
        const chunk = new Float32Array(data.chunk);
        const startIndex = data.startIndex;

        // Copy chunk data to main positions array
        for (let i = 0; i < chunk.length; i++) {
            this.positions[startIndex + i] = chunk[i];
        }

        // Update current particle count
        this.currentParticleCount = Math.floor((startIndex + chunk.length) / 3);

        // Update geometry with current data
        this.geometry.setAttribute('position', 
            new THREE.BufferAttribute(this.positions.slice(0, this.currentParticleCount * 3), 3)
        );
        this.geometry.attributes.position.needsUpdate = true;

        // Update progress
        const progress = data.chunkIndex / data.totalChunks;
        if (this.settings.onProgress) {
            this.settings.onProgress(progress);
        }

        console.log(`Loaded chunk ${data.chunkIndex + 1}/${data.totalChunks} (${this.currentParticleCount.toLocaleString()} particles)`);
    }

    finalizeGeometry() {
        console.log(`GLB loading complete: ${this.currentParticleCount.toLocaleString()} particles loaded`);
        
        // Fit camera to the completed point cloud
        this.fitCameraToPointCloud();
        
        if (this.settings.onProgress) {
            this.settings.onProgress(1.0);
        }
    }

    createParticleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(32, 32, 32, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();

        return new THREE.CanvasTexture(canvas);
    }

    async loadGLBPointCloudFromURL() {
        try {
            console.log('Fetching GLB file:', this.settings.url);
            
            const response = await fetch(this.settings.url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const arrayBuffer = await response.arrayBuffer();
            console.log('GLB file loaded, processing in worker...');

            // Send to worker for processing
            this.worker.postMessage({
                arrayBuffer: arrayBuffer,
                chunkSize: 5000
            }, [arrayBuffer]);

        } catch (err) {
            console.error('Error loading GLB point cloud:', err);
            if (this.settings.onError) {
                this.settings.onError(err);
            }
        }
    }

    fitCameraToPointCloud() {
        if (!this.particles) return;

        // Check if we have saved camera data in the GLB metadata
        if (this.pointCloudData && this.pointCloudData.camera) {
            const cameraData = this.pointCloudData.camera;

            // Apply saved camera settings
            if (cameraData.fov) this.camera.fov = cameraData.fov;
            if (cameraData.near) this.camera.near = cameraData.near;
            if (cameraData.far) this.camera.far = cameraData.far;
            this.camera.updateProjectionMatrix();

            // Restore camera position using saved target and spherical coordinates
            const target = new THREE.Vector3(
                cameraData.target.x,
                cameraData.target.y,
                cameraData.target.z
            );

            const spherical = new THREE.Spherical(
                cameraData.distance,
                cameraData.spherical.phi,
                cameraData.spherical.theta
            );

            const cameraPosition = new THREE.Vector3();
            cameraPosition.setFromSpherical(spherical);
            cameraPosition.add(target);

            this.camera.position.copy(cameraPosition);
            this.camera.lookAt(target);

            if (this.controls) {
                this.controls.target.copy(target);
                this.controls.update();
            }

            console.log('Camera position restored from GLB metadata');
            return;
        }

        // Fallback: Calculate bounding box and auto-fit
        this.particles.geometry.computeBoundingBox();
        const box = this.particles.geometry.boundingBox;
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxSize = Math.max(size.x, size.y, size.z);
        const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * this.camera.fov / 360));
        const fitWidthDistance = fitHeightDistance / this.camera.aspect;
        const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);

        const direction = new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(distance);
        this.camera.position.copy(center).add(direction);

        if (this.controls) {
            this.controls.target.copy(center);
            this.controls.update();
        }

        console.log('Camera auto-fitted to point cloud');
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        if (this.controls) {
            this.controls.update();
        }

        this.renderer.render(this.scene, this.camera);
    }

    updateSettings(newSettings) {
        Object.assign(this.settings, newSettings);

        if (newSettings.backgroundColor && this.renderer) {
            this.renderer.setClearColor(new THREE.Color(newSettings.backgroundColor));
        }

        if (newSettings.particleColor && this.particles) {
            this.particles.material.color.set(newSettings.particleColor);
        }

        if (newSettings.particleSize && this.particles && this.pointCloudData) {
            const originalModelSize = this.pointCloudData.originalModelSize || 1;
            const newSize = newSettings.particleSize * (originalModelSize / 100);
            this.particles.material.size = newSize;
        }

        if (this.controls) {
            if (newSettings.autoRotate !== undefined) {
                this.controls.autoRotate = newSettings.autoRotate;
            }
            if (newSettings.rotationSpeed !== undefined) {
                this.controls.autoRotateSpeed = newSettings.rotationSpeed;
            }
        }
    }

    async loadNewData(glbUrl) {
        this.settings.url = glbUrl;
        await this.loadGLBPointCloudFromURL();
    }

    getMetadata() {
        return this.pointCloudData || {};
    }

    getParticleCount() {
        return this.currentParticleCount || 0;
    }

    destroy() {
        // Stop animation
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        // Terminate worker
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }

        // Dispose of Three.js objects
        if (this.particles) {
            this.particles.geometry.dispose();
            this.particles.material.dispose();
            this.scene.remove(this.particles);
        }

        if (this.particleTexture) {
            this.particleTexture.dispose();
        }

        if (this.renderer) {
            this.renderer.dispose();
            if (this.container && this.renderer.domElement.parentNode === this.container) {
                this.container.removeChild(this.renderer.domElement);
            }
        }

        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }

        if (this.windowResizeHandler) {
            window.removeEventListener('resize', this.windowResizeHandler);
            this.windowResizeHandler = null;
        }

        if (this.container) {
            this.container.innerHTML = '';
        }

        console.log('GLBPointCloudViewer destroyed');
    }
}