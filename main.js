import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
        this.loader = new GLTFLoader();

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
                        console.log('Resize detected:', width, height);

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
            this.loader.load(
                this.settings.url,
                (gltf) => {
                    this.processGLBPointCloud(gltf);
                },
                (progress) => {
                    if (this.settings.onProgress) {
                        const percentComplete = (progress.loaded / progress.total) * 100;
                        this.settings.onProgress(percentComplete / 100);
                    }
                },
                (error) => {
                    console.error('Error loading GLB point cloud:', error);
                    if (this.settings.onError) {
                        this.settings.onError(error);
                    }
                }
            );
        } catch (err) {
            console.error('Error loading point cloud:', err);
            if (this.settings.onError) {
                this.settings.onError(err);
            }
        }
    }

    processGLBPointCloud(gltf) {
        // Clear existing particles
        if (this.particles) {
            this.scene.remove(this.particles);
            this.particles.geometry.dispose();
            this.particles.material.dispose();
        }

        // Find the point cloud object in the GLB
        let pointCloudObject = null;
        
        gltf.scene.traverse((child) => {
            if (child instanceof THREE.Points) {
                pointCloudObject = child;
            }
        });

        if (!pointCloudObject) {
            console.error('No point cloud found in GLB file');
            if (this.settings.onError) {
                this.settings.onError(new Error('No point cloud found in GLB file'));
            }
            return;
        }

        // Extract metadata from userData
        this.pointCloudData = pointCloudObject.userData.particleViewer || {};

        // Clone the point cloud and apply current settings
        this.particles = this.createPointCloudFromGLB(pointCloudObject);

        if (this.particles) {
            this.scene.add(this.particles);
            this.fitCameraToPointCloud();
        } else {
            throw new Error('Could not create point cloud from GLB data');
        }
    }

    createPointCloudFromGLB(sourcePointCloud) {
        // Clone the geometry
        const geometry = sourcePointCloud.geometry.clone();

        // Get original model size from metadata or calculate from geometry
        let originalModelSize = 1;
        if (this.pointCloudData.originalModelSize) {
            originalModelSize = this.pointCloudData.originalModelSize;
        } else {
            geometry.computeBoundingBox();
            const size = geometry.boundingBox.getSize(new THREE.Vector3());
            originalModelSize = Math.max(size.x, size.y, size.z);
        }

        // Calculate particle size based on settings
        const baseSize = this.settings.particleSize * (originalModelSize / 100);

        // Create new material with current settings
        const material = new THREE.PointsMaterial({
            color: new THREE.Color(this.settings.particleColor),
            size: baseSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            map: this.particleTexture,
            alphaTest: 0.5
        });

        return new THREE.Points(geometry, material);
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
        if (this.particles && this.particles.geometry.attributes.position) {
            return this.particles.geometry.attributes.position.count;
        }
        return 0;
    }

    destroy() {
        // Stop animation
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
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