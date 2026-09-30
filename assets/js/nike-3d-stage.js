/**
 * MARVEL VERSE x NIKE BY YOU 3D CUSTOMIZER STAGE
 * High-performance Three.js WebGL Interactive Product Viewport
 * Features:
 * - 360° orbital dragging & touch rotation
 * - Auto-rotation toggle
 * - Exploded engineering parts view
 * - Real-time PBR material & colorway switching
 */

class Nike3DStage {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.modelGroup = null;
    this.materials = {};
    this.parts = {};

    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.rotationVelocity = { x: 0, y: 0.003 };
    this.autoRotate = true;
    this.isExploded = false;
    this.explosionFactor = 0; // 0 (assembled) to 1 (exploded)
    this.targetExplosionFactor = 0;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 640;
    const height = this.container.clientHeight || 480;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 7.2);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.domElement.style.width = "100%";
    this.renderer.domElement.style.height = "100%";
    this.renderer.domElement.style.cursor = "grab";
    this.container.appendChild(this.renderer.domElement);

    // Lighting (Nike Studio Lighting with Rim Accents)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(5, 6, 4);
    this.scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    rimLight.position.set(-6, -4, -3);
    this.scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xe11d48, 1.4);
    fillLight.position.set(4, -5, 2);
    this.scene.add(fillLight);

    // Build 3D Kinetic Model
    this.buildHelmetModel();

    // Bind interaction events
    this.bindEvents();

    // Start render loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  buildHelmetModel() {
    this.modelGroup = new THREE.Group();

    // PBR Materials
    this.materials.primaryShell = new THREE.MeshStandardMaterial({
      color: 0x991b1b, // Iron Man Crimson
      metalness: 0.88,
      roughness: 0.22,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1
    });

    this.materials.secondaryGold = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Titanium Gold
      metalness: 0.92,
      roughness: 0.18,
      clearcoat: 0.6
    });

    this.materials.chassis = new THREE.MeshStandardMaterial({
      color: 0x18181b, // Gunmetal Core
      metalness: 0.95,
      roughness: 0.3
    });

    this.materials.arcGlow = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 2.2,
      roughness: 0.1
    });

    // 1. Core Cranial Vault (Base Skull)
    const skullGeo = new THREE.SphereGeometry(1.4, 48, 48);
    skullGeo.scale(1, 1.18, 1.15);
    const skullMesh = new THREE.Mesh(skullGeo, this.materials.primaryShell);
    this.parts.skull = skullMesh;
    this.modelGroup.add(skullMesh);

    // 2. Forehead Brow Plate
    const browGeo = new THREE.CylinderGeometry(1.42, 1.45, 0.45, 36, 1, false, 0, Math.PI);
    browGeo.rotateY(-Math.PI / 2);
    browGeo.scale(1, 1, 1.2);
    const browMesh = new THREE.Mesh(browGeo, this.materials.secondaryGold);
    browMesh.position.set(0, 0.65, 0.2);
    this.parts.brow = browMesh;
    this.modelGroup.add(browMesh);

    // 3. Front Faceplate (Can explode / lift)
    const faceGroup = new THREE.Group();
    const faceGeo = new THREE.BoxGeometry(1.55, 1.6, 0.6);
    const faceMesh = new THREE.Mesh(faceGeo, this.materials.secondaryGold);
    faceMesh.position.set(0, -0.15, 1.15);
    faceGroup.add(faceMesh);

    // Eye Optics (HUD Glow)
    const eyeGeo = new THREE.BoxGeometry(0.42, 0.08, 0.05);
    const leftEye = new THREE.Mesh(eyeGeo, this.materials.arcGlow);
    leftEye.position.set(-0.42, 0.15, 1.46);
    leftEye.rotation.z = -0.06;
    faceGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, this.materials.arcGlow);
    rightEye.position.set(0.42, 0.15, 1.46);
    rightEye.rotation.z = 0.06;
    faceGroup.add(rightEye);

    // Jaw / Chin Plate
    const chinGeo = new THREE.ConeGeometry(0.7, 0.6, 4);
    chinGeo.rotateY(Math.PI / 4);
    const chinMesh = new THREE.Mesh(chinGeo, this.materials.primaryShell);
    chinMesh.position.set(0, -0.95, 1.1);
    chinMesh.rotation.x = Math.PI;
    faceGroup.add(chinMesh);

    this.parts.faceplate = faceGroup;
    this.modelGroup.add(faceGroup);

    // 4. Ear Ring Flanges (Tactile Audio Disc Nodes)
    const earGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.2, 32);
    earGeo.rotateZ(Math.PI / 2);

    const leftEar = new THREE.Mesh(earGeo, this.materials.chassis);
    leftEar.position.set(-1.42, 0, 0);
    this.parts.leftEar = leftEar;
    this.modelGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, this.materials.chassis);
    rightEar.position.set(1.42, 0, 0);
    this.parts.rightEar = rightEar;
    this.modelGroup.add(rightEar);

    // Center and tilt slightly towards camera
    this.modelGroup.position.set(0, 0, 0);
    this.modelGroup.rotation.x = 0.1;
    this.modelGroup.rotation.y = -0.3;
    this.scene.add(this.modelGroup);
  }

  bindEvents() {
    const el = this.renderer.domElement;

    // Mouse drag
    el.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.autoRotate = false;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
      el.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging || !this.modelGroup) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.modelGroup.rotation.y += deltaX * 0.008;
      this.modelGroup.rotation.x += deltaY * 0.008;
      this.modelGroup.rotation.x = Math.max(-0.6, Math.min(0.6, this.modelGroup.rotation.x));

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener("mouseup", () => {
      if (this.isDragging) {
        this.isDragging = false;
        el.style.cursor = "grab";
        setTimeout(() => { this.autoRotate = true; }, 2500);
      }
    });

    // Touch support (mobile 360° rotation)
    el.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.autoRotate = false;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    el.addEventListener("touchmove", (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

      this.modelGroup.rotation.y += deltaX * 0.008;
      this.modelGroup.rotation.x += deltaY * 0.008;
      this.modelGroup.rotation.x = Math.max(-0.6, Math.min(0.6, this.modelGroup.rotation.x));

      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    el.addEventListener("touchend", () => {
      this.isDragging = false;
      setTimeout(() => { this.autoRotate = true; }, 2500);
    });

    // Resize handling
    window.addEventListener("resize", () => {
      if (!this.container || !this.renderer || !this.camera) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });
  }

  setColorway(colorwayName) {
    if (!this.materials.primaryShell || !this.materials.secondaryGold) return;

    if (colorwayName === "crimson-gold") {
      this.materials.primaryShell.color.setHex(0x991b1b);
      this.materials.primaryShell.metalness = 0.88;
      this.materials.secondaryGold.color.setHex(0xd97706);
      this.materials.arcGlow.color.setHex(0x38bdf8);
      this.materials.arcGlow.emissive.setHex(0x0284c7);
    } else if (colorwayName === "stealth-carbon") {
      this.materials.primaryShell.color.setHex(0x18181b);
      this.materials.primaryShell.metalness = 0.95;
      this.materials.secondaryGold.color.setHex(0x27272a);
      this.materials.arcGlow.color.setHex(0xe11d48);
      this.materials.arcGlow.emissive.setHex(0xbe123c);
    } else if (colorwayName === "silver-centurion") {
      this.materials.primaryShell.color.setHex(0xd4d4d8);
      this.materials.primaryShell.metalness = 0.98;
      this.materials.secondaryGold.color.setHex(0x991b1b);
      this.materials.arcGlow.color.setHex(0x38bdf8);
      this.materials.arcGlow.emissive.setHex(0x0284c7);
    } else if (colorwayName === "arc-blue") {
      this.materials.primaryShell.color.setHex(0x0f172a);
      this.materials.primaryShell.metalness = 0.92;
      this.materials.secondaryGold.color.setHex(0x38bdf8);
      this.materials.arcGlow.color.setHex(0x7dd3fc);
      this.materials.arcGlow.emissive.setHex(0x38bdf8);
    }
  }

  toggleExplode() {
    this.isExploded = !this.isExploded;
    this.targetExplosionFactor = this.isExploded ? 1 : 0;
    return this.isExploded;
  }

  animate() {
    requestAnimationFrame(this.animate);

    // Smooth auto-rotation
    if (this.autoRotate && this.modelGroup) {
      this.modelGroup.rotation.y += 0.004;
    }

    // Smooth exploded animation interpolation
    if (Math.abs(this.explosionFactor - this.targetExplosionFactor) > 0.005) {
      this.explosionFactor += (this.targetExplosionFactor - this.explosionFactor) * 0.12;

      if (this.parts.faceplate) {
        this.parts.faceplate.position.z = this.explosionFactor * 0.85;
        this.parts.faceplate.position.y = this.explosionFactor * 0.45;
      }
      if (this.parts.brow) {
        this.parts.brow.position.y = 0.65 + (this.explosionFactor * 0.35);
      }
      if (this.parts.leftEar) {
        this.parts.leftEar.position.x = -1.42 - (this.explosionFactor * 0.4);
      }
      if (this.parts.rightEar) {
        this.parts.rightEar.position.x = 1.42 + (this.explosionFactor * 0.4);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.Nike3DStage = Nike3DStage;
