/**
 * MARVEL STUDIOS COLLECTIBLES // 3D ARC REACTOR DIGITAL TWIN ENGINE
 * Photorealistic Three.js 3D Mark I Arc Reactor Phone Charger
 * Bespoke procedural textures, 1:1 CNC billet aluminum, 10-phase copper toroids,
 * cold fusion LED multi-spectrum luminescence & magnetic phone dock.
 */

(function(window) {
  'use strict';

  const STATE = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    reactorGroup: null,
    subAssemblies: {},
    phoneMesh: null,
    particleSystem: null,
    envTexture: null,
    coreLight: null,
    frontLight: null,
    glowMat: null,
    orbMat: null,
    circuitMat: null,
    
    currentMode: 'classic',
    colorModes: {
      classic:   { hex: 0x00f0ff, css: '#00f0ff', intensity: 3.2, name: 'MK-I Cyan (460nm)' },
      vibranium: { hex: 0xdff9fb, css: '#dff9fb', intensity: 4.5, name: 'Overdrive White-Blue' },
      nanotech:  { hex: 0xff3b3b, css: '#ff3b3b', intensity: 3.0, name: 'MK-85 Nano Crimson' },
      stealth:   { hex: 0xe2a86a, css: '#e2a86a', intensity: 1.5, name: 'Tungsten Amber' }
    },

    isExploded: false,
    explodeProgress: 0.0,
    isPhoneDocked: false,
    isVitrineVisible: false,
    vitrineMesh: null,
    engravingText: "PROOF THAT TONY STARK HAS A HEART",
    mouseParallax: { x: 0, y: 0, targetX: 0, targetY: 0 },
    isInitialized: false
  };

  // 1. PROCEDURAL STUDIO ENVIRONMENT
  function createStudioEnvironment() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#07090e';
    ctx.fillRect(0, 0, 1024, 512);

    const topLight = ctx.createLinearGradient(0, 0, 0, 200);
    topLight.addColorStop(0, '#ffffff');
    topLight.addColorStop(0.4, '#bae6fd');
    topLight.addColorStop(1, 'transparent');
    ctx.fillStyle = topLight;
    ctx.fillRect(256, 0, 512, 160);

    const leftFill = ctx.createRadialGradient(150, 256, 10, 150, 256, 200);
    leftFill.addColorStop(0, 'rgba(0, 240, 255, 0.45)');
    leftFill.addColorStop(1, 'transparent');
    ctx.fillStyle = leftFill;
    ctx.fillRect(0, 100, 300, 312);

    const rightRim = ctx.createRadialGradient(880, 256, 10, 880, 256, 200);
    rightRim.addColorStop(0, 'rgba(217, 119, 66, 0.35)');
    rightRim.addColorStop(1, 'transparent');
    ctx.fillStyle = rightRim;
    ctx.fillRect(724, 100, 300, 312);

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
  }

  // 2. BILLET ALUMINUM BEZEL WITH EXACT ENGRAVED ARCS
  function createEngravedBezelTexture(inscription) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');
    const cx = 1024;
    const cy = 1024;

    const grad = ctx.createRadialGradient(cx, cy, 700, cx, cy, 1024);
    grad.addColorStop(0, '#c2c9d4');
    grad.addColorStop(0.3, '#d8dee8');
    grad.addColorStop(0.65, '#b0b8c6');
    grad.addColorStop(1, '#8e96a4');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2048, 2048);

    ctx.save();
    for (let r = 720; r < 1010; r += 1.2) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      const alpha = (Math.sin(r * 3.4) * 0.5 + 0.5) * 0.12;
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();

    [740, 746, 990, 1000].forEach(r => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.lineWidth = 2.5;
      ctx.stroke();
    });

    ctx.save();
    ctx.font = 'bold 74px "Syne", "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    function drawTextAlongArc(text, radius, startAngle, angleSpread, isReversed) {
      const chars = text.split('');
      const step = angleSpread / Math.max(1, chars.length - 1);
      
      chars.forEach((char, i) => {
        ctx.save();
        const angle = isReversed ? startAngle - i * step : startAngle + i * step;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        
        ctx.translate(x, y);
        ctx.rotate(angle + (isReversed ? -Math.PI / 2 : Math.PI / 2));
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText(char, 0, 2);

        ctx.fillStyle = '#111317';
        ctx.fillText(char, 0, 0);
        ctx.restore();
      });
    }

    const topText = "PROOF THAT TONY STARK";
    const bottomText = "HAS A HEART";

    drawTextAlongArc(topText, 865, -Math.PI * 0.82, Math.PI * 0.64, false);
    drawTextAlongArc(bottomText, 865, Math.PI * 0.76, Math.PI * 0.52, true);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  }

  // 3. COPPER MAGNET WIRE TOROIDAL COILS
  function createCopperCoilTexture(hasPowerIcon = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#b85e33';
    ctx.fillRect(0, 0, 512, 512);

    const strandCount = 36;
    const strandHeight = 512 / strandCount;

    for (let i = 0; i < strandCount; i++) {
      const y = i * strandHeight;
      const wireGrad = ctx.createLinearGradient(0, y, 0, y + strandHeight);
      wireGrad.addColorStop(0, '#53230e');
      wireGrad.addColorStop(0.25, '#d97d4c');
      wireGrad.addColorStop(0.5, '#f5a473');
      wireGrad.addColorStop(0.8, '#b85e33');
      wireGrad.addColorStop(1, '#3b1608');

      ctx.fillStyle = wireGrad;
      ctx.fillRect(0, y, 512, strandHeight);
    }

    if (hasPowerIcon) {
      const cx = 256;
      const cy = 256;
      ctx.fillStyle = 'rgba(30, 20, 15, 0.45)';
      ctx.beginPath();
      ctx.arc(cx, cy, 70, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 42, -Math.PI * 0.35, Math.PI * 1.35, false);
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#ffffff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cx, cy - 54);
      ctx.lineTo(cx, cy - 8);
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  // 4. PHOTOREALISTIC CENTER REACTOR CORE
  function createCoreCircuitTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');
    const cx = 1024;
    const cy = 1024;

    ctx.fillStyle = '#080a0e';
    ctx.fillRect(0, 0, 2048, 2048);

    // Outer segmented dial
    ctx.save();
    ctx.strokeStyle = '#384252';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(cx, cy, 940, 0, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < 60; i++) {
      const ang = (i / 60) * Math.PI * 2;
      const isMajor = i % 6 === 0;
      const r1 = isMajor ? 890 : 915;
      const r2 = 940;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * r1, cy + Math.sin(ang) * r1);
      ctx.lineTo(cx + Math.cos(ang) * r2, cy + Math.sin(ang) * r2);
      ctx.strokeStyle = isMajor ? '#94a3b8' : '#475569';
      ctx.lineWidth = isMajor ? 6 : 2.5;
      ctx.stroke();
    }
    ctx.restore();

    // Ring of 24 glowing cyan pill LEDs
    const numPills = 24;
    const pillRadius = 840;
    for (let i = 0; i < numPills; i++) {
      const ang = (i / numPills) * Math.PI * 2;
      const px = cx + Math.cos(ang) * pillRadius;
      const py = cy + Math.sin(ang) * pillRadius;

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(ang + Math.PI / 2);

      ctx.fillStyle = '#e0faff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 24;

      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-12, -26, 24, 52, 10);
      } else {
        ctx.rect(-12, -26, 24, 52);
      }
      ctx.fill();

      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 3;
      ctx.shadowBlur = 0;
      ctx.stroke();
      ctx.restore();
    }

    // Busbars
    const trackRadii = [
      { r: 740, color: '#00f0ff', width: 6, glow: true },
      { r: 680, color: '#d4af37', width: 14, glow: false },
      { r: 640, color: '#1e293b', width: 4, glow: false },
      { r: 590, color: '#d4af37', width: 10, glow: false },
      { r: 530, color: '#00f0ff', width: 8, glow: true }
    ];

    trackRadii.forEach(tr => {
      ctx.beginPath();
      ctx.arc(cx, cy, tr.r, 0, Math.PI * 2);
      ctx.strokeStyle = tr.color;
      ctx.lineWidth = tr.width;
      if (tr.glow) {
        ctx.shadowColor = tr.color;
        ctx.shadowBlur = 16;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    });

    // 3 Radial struts
    const strutAngles = [Math.PI * 0.16, Math.PI * 0.84, Math.PI * 1.5];
    strutAngles.forEach(ang => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ang);

      ctx.fillStyle = '#161922';
      ctx.fillRect(320, -32, 440, 64);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 4;
      ctx.strokeRect(320, -32, 440, 64);

      ctx.fillStyle = '#d4af37';
      ctx.fillRect(340, -8, 400, 16);

      [380, 520, 680].forEach(sx => {
        ctx.beginPath();
        ctx.arc(sx, 0, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#cbd5e1';
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ctx.restore();
    });

    // Center circular perforated mesh
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, 320, 0, Math.PI * 2);
    ctx.fillStyle = '#05070a';
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.shadowBlur = 0;

    for (let r = 24; r < 300; r += 26) {
      const dots = Math.floor(r * 0.24);
      for (let d = 0; d < dots; d++) {
        const a = (d / dots) * Math.PI * 2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        const distRatio = 1 - (r / 300);
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = distRatio > 0.4 ? `rgba(224, 250, 255, ${distRatio})` : '#1e293b';
        ctx.fill();
      }
    }

    const coreGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 140);
    coreGlow.addColorStop(0, '#ffffff');
    coreGlow.addColorStop(0.3, '#7dd3fc');
    coreGlow.addColorStop(0.8, 'rgba(0, 240, 255, 0.4)');
    coreGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, 140, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  }

  // 5. BASE PEDESTAL PLAQUE TEXTURE
  function createBasePlateTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#1c212a';
    ctx.fillRect(0, 0, 1024, 1024);

    for (let y = 0; y < 1024; y += 2) {
      const alpha = (Math.sin(y * 1.8) * 0.5 + 0.5) * 0.08;
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fillRect(0, y, 1024, 1);
    }

    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 14;
    ctx.strokeRect(40, 40, 944, 944);

    const cx = 512;
    const cy = 460;
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(cx - 210, cy - 100, 420, 80);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 4;
    ctx.strokeRect(cx - 210, cy - 100, 420, 80);
    
    ctx.font = '900 52px "Space Grotesk", "Syne", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MARVEL STUDIOS', cx, cy - 60);

    ctx.font = '400 32px "JetBrains Mono", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('THE', cx, cy + 50);

    ctx.font = '800 68px "Syne", serif';
    ctx.fillStyle = '#f1f5f9';
    ctx.fillText('INFINITY', cx, cy + 120);

    ctx.font = '600 48px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('SAGA', cx, cy + 190);

    return new THREE.CanvasTexture(canvas);
  }

  // 6. SMARTPHONE LOCKSCREEN TEXTURE
  function createPhoneScreenTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0f1115';
    ctx.fillRect(0, 0, 512, 1024);

    ctx.save();
    ctx.font = '900 72px "Arial Black", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.textAlign = 'center';
    ctx.fillText('IRON', 256, 320);
    ctx.fillText('MAN', 256, 390);
    ctx.fillText('MARVEL', 256, 460);
    ctx.restore();

    const chestGrad = ctx.createLinearGradient(128, 480, 384, 850);
    chestGrad.addColorStop(0, '#c026d3');
    chestGrad.addColorStop(0.3, '#dc2626');
    chestGrad.addColorStop(0.7, '#eab308');
    chestGrad.addColorStop(1, '#991b1b');

    ctx.fillStyle = chestGrad;
    ctx.beginPath();
    ctx.moveTo(256, 500);
    ctx.lineTo(380, 560);
    ctx.lineTo(340, 780);
    ctx.lineTo(256, 880);
    ctx.lineTo(172, 780);
    ctx.lineTo(132, 560);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(256, 570);
    ctx.lineTo(290, 630);
    ctx.lineTo(222, 630);
    ctx.closePath();
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 24;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.font = '500 24px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.textAlign = 'center';
    ctx.fillText('Tue 23 Jun   28°', 256, 210);

    ctx.font = '700 84px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#fed7aa';
    ctx.fillText('04:53', 256, 290);

    ctx.save();
    ctx.beginPath();
    ctx.arc(256, 600, 110, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('15W FAST QI INDUCTION', 256, 940);
    ctx.restore();

    return new THREE.CanvasTexture(canvas);
  }

  // 7. BUILD 3D ARC REACTOR GEOMETRIES
  function buildArcReactorModel(scene) {
    const masterGroup = new THREE.Group();
    masterGroup.position.set(0, 0.2, 0);
    scene.add(masterGroup);
    STATE.reactorGroup = masterGroup;

    // Sub-Assembly 1: Billet 6061 Aluminum Bezel
    const bezelGroup = new THREE.Group();
    const bezelTexture = createEngravedBezelTexture(STATE.engravingText);

    const bezelMat = new THREE.MeshStandardMaterial({
      map: bezelTexture,
      metalness: 0.9,
      roughness: 0.24,
      envMapIntensity: 2.0
    });

    const frontRingGeo = new THREE.RingGeometry(1.08, 1.48, 64);
    const frontRingMesh = new THREE.Mesh(frontRingGeo, bezelMat);
    frontRingMesh.position.z = 0.08;
    frontRingMesh.castShadow = true;
    frontRingMesh.receiveShadow = true;
    bezelGroup.add(frontRingMesh);

    const outerCylGeo = new THREE.CylinderGeometry(1.48, 1.48, 0.22, 64, 1, true);
    outerCylGeo.rotateX(Math.PI / 2);
    const housingMat = new THREE.MeshStandardMaterial({
      color: 0x8a93a0,
      metalness: 0.92,
      roughness: 0.28,
      envMapIntensity: 1.8
    });
    const outerCylMesh = new THREE.Mesh(outerCylGeo, housingMat);
    outerCylMesh.position.z = -0.03;
    bezelGroup.add(outerCylMesh);

    const innerCylGeo = new THREE.CylinderGeometry(1.08, 1.08, 0.16, 64, 1, true);
    innerCylGeo.rotateX(Math.PI / 2);
    const innerCylMesh = new THREE.Mesh(innerCylGeo, housingMat);
    innerCylMesh.position.z = 0.0;
    bezelGroup.add(innerCylMesh);

    const rearRingGeo = new THREE.RingGeometry(0.72, 1.48, 64);
    const rearRingMesh = new THREE.Mesh(rearRingGeo, housingMat);
    rearRingMesh.position.z = -0.14;
    rearRingMesh.rotation.y = Math.PI;
    bezelGroup.add(rearRingMesh);

    // Bottom Hinge Lugs at 6 o'clock (connecting to vertical pillar fork as seen in hands-on video)
    const hingeMat = new THREE.MeshStandardMaterial({
      color: 0x949cb0,
      metalness: 0.9,
      roughness: 0.25,
      envMapIntensity: 2.0
    });
    const lugGeo = new THREE.BoxGeometry(0.06, 0.22, 0.16);
    const lugLeft = new THREE.Mesh(lugGeo, hingeMat);
    lugLeft.position.set(-0.1, -1.5, -0.06);
    bezelGroup.add(lugLeft);

    const lugRight = new THREE.Mesh(lugGeo, hingeMat);
    lugRight.position.set(0.1, -1.5, -0.06);
    bezelGroup.add(lugRight);

    const pivotPinGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.32, 16);
    pivotPinGeo.rotateZ(Math.PI / 2);
    const pivotPin = new THREE.Mesh(pivotPinGeo, hingeMat);
    pivotPin.position.set(0, -1.5, -0.06);
    bezelGroup.add(pivotPin);

    masterGroup.add(bezelGroup);
    STATE.subAssemblies.bezel = bezelGroup;

    // Sub-Assembly 2: 10-Phase Copper Toroidal Coils
    const coilsGroup = new THREE.Group();
    const copperNormalTexture = createCopperCoilTexture(false);
    const copperPowerTexture = createCopperCoilTexture(true);

    const copperMatNormal = new THREE.MeshStandardMaterial({
      map: copperNormalTexture,
      metalness: 0.88,
      roughness: 0.26,
      envMapIntensity: 2.0
    });

    const copperMatPower = new THREE.MeshStandardMaterial({
      map: copperPowerTexture,
      metalness: 0.88,
      roughness: 0.26,
      envMapIntensity: 2.0
    });

    // Dark matte graphite brackets matching physical prop photo (media_1790446033063.jpg)
    const darkBracketMat = new THREE.MeshStandardMaterial({
      color: 0x181c22,
      metalness: 0.72,
      roughness: 0.45,
      envMapIntensity: 1.4
    });

    const silverBracketMat = new THREE.MeshStandardMaterial({
      color: 0xd4d8e0,
      metalness: 0.95,
      roughness: 0.18,
      envMapIntensity: 2.2
    });

    const numCoils = 10;
    const coilRadius = 0.94;
    const coilMeshes = [];

    for (let i = 0; i < numCoils; i++) {
      const angle = (i / numCoils) * Math.PI * 2;
      const singleCoilGroup = new THREE.Group();
      const isBottomPowerCoil = (i === 5);
      const coilMat = isBottomPowerCoil ? copperMatPower : copperMatNormal;

      const wireGeo = new THREE.BoxGeometry(0.24, 0.36, 0.22);
      const wireMesh = new THREE.Mesh(wireGeo, coilMat);
      wireMesh.castShadow = true;
      singleCoilGroup.add(wireMesh);

      // Dark clamps holding the outer and inner ends of copper coils
      const bracketGeo = new THREE.BoxGeometry(0.28, 0.07, 0.25);
      const bracketTop = new THREE.Mesh(bracketGeo, darkBracketMat);
      bracketTop.position.y = 0.15;
      singleCoilGroup.add(bracketTop);

      const bracketBottom = bracketTop.clone();
      bracketBottom.position.y = -0.15;
      singleCoilGroup.add(bracketBottom);

      const x = Math.cos(angle) * coilRadius;
      const y = Math.sin(angle) * coilRadius;
      singleCoilGroup.position.set(x, y, 0.05);
      singleCoilGroup.rotation.z = angle - Math.PI / 2;

      coilsGroup.add(singleCoilGroup);
      coilMeshes.push(singleCoilGroup);
    }
    coilsGroup.userData.coilsList = coilMeshes;
    masterGroup.add(coilsGroup);
    STATE.subAssemblies.coils = coilsGroup;

    // Sub-Assembly 3: Optical Acrylic Light Guide & 10 Cyan LEDs
    const diffuserGroup = new THREE.Group();
    const acrylicMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.94,
      opacity: 0.9,
      transparent: true,
      roughness: 0.08,
      ior: 1.52,
      metalness: 0.05,
      thickness: 0.45,
      envMapIntensity: 2.5
    });

    const acrylicRingGeo = new THREE.TorusGeometry(0.94, 0.13, 24, 64);
    const acrylicMesh = new THREE.Mesh(acrylicRingGeo, acrylicMat);
    acrylicMesh.position.z = 0.0;
    diffuserGroup.add(acrylicMesh);

    const ledBarMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.92
    });
    STATE.glowMat = ledBarMat;

    for (let i = 0; i < numCoils; i++) {
      const angle = ((i + 0.5) / numCoils) * Math.PI * 2;
      const ledGeo = new THREE.BoxGeometry(0.18, 0.14, 0.08);
      const ledMesh = new THREE.Mesh(ledGeo, ledBarMat);
      ledMesh.position.set(Math.cos(angle) * 0.94, Math.sin(angle) * 0.94, -0.04);
      ledMesh.rotation.z = angle - Math.PI / 2;
      diffuserGroup.add(ledMesh);
    }

    masterGroup.add(diffuserGroup);
    STATE.subAssemblies.diffuser = diffuserGroup;

    // Sub-Assembly 4: Central Core with 24 Pill LEDs & Struts
    const coreGroup = new THREE.Group();
    const circuitTexture = createCoreCircuitTexture();

    const circuitMat = new THREE.MeshStandardMaterial({
      map: circuitTexture,
      metalness: 0.82,
      roughness: 0.3,
      emissive: 0x00f0ff,
      emissiveMap: circuitTexture,
      emissiveIntensity: 0.5,
      envMapIntensity: 1.8
    });
    STATE.circuitMat = circuitMat;

    const coreDiscGeo = new THREE.CircleGeometry(0.74, 64);
    const coreDiscMesh = new THREE.Mesh(coreDiscGeo, circuitMat);
    coreDiscMesh.position.z = 0.04;
    coreGroup.add(coreDiscMesh);

    const turbineMat = new THREE.MeshStandardMaterial({
      color: 0xd4d8e2,
      metalness: 0.96,
      roughness: 0.16,
      envMapIntensity: 2.2
    });
    const turbineRingGeo = new THREE.RingGeometry(0.25, 0.35, 48);
    const turbineMesh = new THREE.Mesh(turbineRingGeo, turbineMat);
    turbineMesh.position.z = 0.06;
    coreGroup.add(turbineMesh);

    const orbMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    STATE.orbMat = orbMat;
    const orbGeo = new THREE.SphereGeometry(0.08, 32, 32);
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    orbMesh.position.z = 0.07;
    coreGroup.add(orbMesh);

    // 3 Socket-Head Hex Screws at 120 degrees on inner ring (matching physical prop photo media_1790446033063.jpg)
    const hexScrewMat = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      metalness: 0.88,
      roughness: 0.32,
      envMapIntensity: 1.8
    });
    const hexAngles = [Math.PI * 0.16, Math.PI * 0.84, Math.PI * 1.5]; // 10:00, 2:00, 6:00
    hexAngles.forEach(ang => {
      const hexGroup = new THREE.Group();
      const headGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.04, 16);
      headGeo.rotateX(Math.PI / 2);
      const headMesh = new THREE.Mesh(headGeo, hexScrewMat);
      hexGroup.add(headMesh);

      const recessGeo = new THREE.CylinderGeometry(0.024, 0.024, 0.025, 6);
      recessGeo.rotateX(Math.PI / 2);
      const recessMat = new THREE.MeshBasicMaterial({ color: 0x07090e });
      const recessMesh = new THREE.Mesh(recessGeo, recessMat);
      recessMesh.position.z = 0.015;
      hexGroup.add(recessMesh);

      const r = 0.52;
      hexGroup.position.set(Math.cos(ang) * r, Math.sin(ang) * r, 0.065);
      coreGroup.add(hexGroup);
    });

    masterGroup.add(coreGroup);
    STATE.subAssemblies.core = coreGroup;

    // Sub-Assembly 5: Titanium Mounting Neck & Weighted Pedestal
    const baseGroup = new THREE.Group();
    const neckMat = new THREE.MeshStandardMaterial({
      color: 0x7c8594,
      metalness: 0.92,
      roughness: 0.22,
      envMapIntensity: 2.0
    });

    const pillarGeo = new THREE.CylinderGeometry(0.12, 0.14, 1.4, 32);
    pillarGeo.rotateX(0.24);
    const pillarMesh = new THREE.Mesh(pillarGeo, neckMat);
    pillarMesh.position.set(0, -0.9, -0.34);
    pillarMesh.castShadow = true;
    baseGroup.add(pillarMesh);

    const screwGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.3, 16);
    screwGeo.rotateZ(Math.PI / 2);
    const screwMesh = new THREE.Mesh(screwGeo, silverBracketMat);
    screwMesh.position.set(0, -0.32, -0.16);
    baseGroup.add(screwMesh);

    const basePlateTexture = createBasePlateTexture();
    const basePlateMat = new THREE.MeshStandardMaterial({
      map: basePlateTexture,
      metalness: 0.88,
      roughness: 0.28,
      envMapIntensity: 1.8
    });

    const baseGeo = new THREE.BoxGeometry(2.4, 0.14, 2.4);
    const baseMesh = new THREE.Mesh(baseGeo, basePlateMat);
    baseMesh.position.set(0, -1.6, -0.18);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    baseGroup.add(baseMesh);

    const footTrimGeo = new THREE.BoxGeometry(2.48, 0.04, 2.48);
    const footTrimMesh = new THREE.Mesh(footTrimGeo, silverBracketMat);
    footTrimMesh.position.set(0, -1.67, -0.18);
    baseGroup.add(footTrimMesh);

    masterGroup.add(baseGroup);
    STATE.subAssemblies.base = baseGroup;

    masterGroup.rotation.x = -0.16;

    // Sub-Assembly 6: Pepper Potts Memorial Glass Vitrine Display Case
    const vitrineGroup = new THREE.Group();
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xf0fdfa,
      transmission: 0.95,
      opacity: 0.4,
      transparent: true,
      roughness: 0.04,
      ior: 1.5,
      reflectivity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      side: THREE.DoubleSide
    });
    const glassGeo = new THREE.BoxGeometry(2.68, 3.4, 2.68);
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.set(0, 0.05, -0.18);
    vitrineGroup.add(glassMesh);

    const edgeGeo = new THREE.EdgesGeometry(glassGeo);
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.75,
      linewidth: 2
    });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    edgeLines.position.set(0, 0.05, -0.18);
    vitrineGroup.add(edgeLines);

    vitrineGroup.visible = false;
    scene.add(vitrineGroup);
    STATE.vitrineMesh = vitrineGroup;
  }

  // 8. BUILD SMARTPHONE
  function buildSmartphoneModel(scene) {
    const phoneGroup = new THREE.Group();
    const bodyGeo = new THREE.BoxGeometry(1.28, 2.6, 0.07);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x181c22,
      metalness: 0.92,
      roughness: 0.2,
      envMapIntensity: 2.0
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.castShadow = true;
    phoneGroup.add(bodyMesh);

    const camBumpGeo = new THREE.BoxGeometry(0.4, 0.45, 0.04);
    const camBumpMesh = new THREE.Mesh(camBumpGeo, bodyMat);
    camBumpMesh.position.set(-0.36, 0.98, -0.05);
    phoneGroup.add(camBumpMesh);

    const screenTexture = createPhoneScreenTexture();
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      transparent: true,
      opacity: 0.96
    });

    const screenGeo = new THREE.PlaneGeometry(1.22, 2.52);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.038;
    phoneGroup.add(screenMesh);

    phoneGroup.position.set(0, 0.35, 1.8);
    phoneGroup.scale.set(0.001, 0.001, 0.001);
    phoneGroup.visible = false;

    scene.add(phoneGroup);
    STATE.phoneMesh = phoneGroup;
  }

  // 9. SWIRLING ION PARTICLE VORTEX
  function buildParticleVortex(scene) {
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * 1.2;
      const z = (Math.random() - 0.5) * 0.8;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = z;

      velocities.push({
        angle: angle,
        radius: radius,
        speed: 0.008 + Math.random() * 0.014,
        zSpeed: (Math.random() - 0.5) * 0.004
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particleMesh = new THREE.Points(geometry, material);
    particleMesh.position.set(0, 0.3, 0);
    scene.add(particleMesh);
    
    STATE.particleSystem = {
      mesh: particleMesh,
      velocities: velocities,
      geometry: geometry,
      material: material
    };
  }

  // 10. LIGHTING
  function setupLighting(scene) {
    const ambient = new THREE.AmbientLight(0x202936, 1.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(2.5, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const copperRim = new THREE.DirectionalLight(0xff9f68, 1.8);
    copperRim.position.set(-4, -1, -2);
    scene.add(copperRim);

    const coreLight = new THREE.PointLight(0x00f0ff, 3.2, 7, 1.6);
    coreLight.position.set(0, 0.35, 0.45);
    scene.add(coreLight);
    STATE.coreLight = coreLight;

    const frontLight = new THREE.PointLight(0x38bdf8, 1.2, 5, 2.0);
    frontLight.position.set(0, 0.35, 1.4);
    scene.add(frontLight);
    STATE.frontLight = frontLight;
  }

  // 11. MAIN INIT
  function init(containerId) {
    if (STATE.isInitialized) return;
    const container = document.getElementById(containerId || 'arc3dCanvasContainer');
    if (!container) return;

    if (typeof THREE === 'undefined') {
      console.warn("Three.js not loaded. Retrying in 200ms...");
      setTimeout(() => init(containerId), 200);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.035);
    STATE.scene = scene;

    const envTex = createStudioEnvironment();
    scene.environment = envTex;
    STATE.envTexture = envTex;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 4.4);
    STATE.camera = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.touchAction = 'none';
    container.appendChild(renderer.domElement);
    STATE.renderer = renderer;

    if (typeof THREE.OrbitControls !== 'undefined') {
      const controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.minDistance = 1.6;
      controls.maxDistance = 7.5;
      controls.maxPolarAngle = Math.PI / 2 + 0.2;
      controls.enableZoom = true;
      controls.enableRotate = true;
      controls.rotateSpeed = 1.0;
      if (controls.touches) {
        controls.touches.ONE = THREE.TOUCH.ROTATE;
        controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
      }
      controls.addEventListener('start', () => { STATE.isInteracting = true; });
      controls.addEventListener('end', () => {
        setTimeout(() => { STATE.isInteracting = false; }, 600);
      });
      STATE.controls = controls;
    }

    // Direct Mobile Touch Drag Fallback for smooth 360-degree rotation on phones
    let touchStartX = 0;
    let touchStartY = 0;
    let isDirectTouch = false;

    renderer.domElement.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isDirectTouch = true;
        STATE.isInteracting = true;
      }
    }, { passive: false });

    renderer.domElement.addEventListener('touchmove', (e) => {
      if (isDirectTouch && e.touches && e.touches.length === 1 && STATE.reactorGroup) {
        e.preventDefault(); // Prioritize 3D rotation over page scroll when dragging on 3D canvas
        const dx = (e.touches[0].clientX - touchStartX);
        const dy = (e.touches[0].clientY - touchStartY);
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;

        STATE.reactorGroup.rotation.y += dx * 0.014;
        STATE.reactorGroup.rotation.x = Math.max(-0.6, Math.min(0.6, STATE.reactorGroup.rotation.x + dy * 0.014));
      }
    }, { passive: false });

    renderer.domElement.addEventListener('touchend', () => {
      isDirectTouch = false;
      setTimeout(() => { STATE.isInteracting = false; }, 600);
    }, { passive: true });

    setupLighting(scene);
    buildArcReactorModel(scene);
    buildSmartphoneModel(scene);
    buildParticleVortex(scene);

    // Responsive Resize with ResizeObserver
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(entries => {
        for (let entry of entries) {
          const w = entry.contentRect.width;
          const h = entry.contentRect.height;
          if (w > 0 && h > 0) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
          }
        }
      });
      ro.observe(container);
    } else {
      window.addEventListener('resize', () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      });
    }

    // Gentle mouse parallax when idle on desktop
    window.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      STATE.mouseParallax.targetX = nx;
      STATE.mouseParallax.targetY = ny;
    });

    // Mobile scroll-driven 3D movement: 3D heart moves as user scrolls the page
    window.addEventListener('scroll', () => {
      if (!STATE.isInteracting && STATE.reactorGroup) {
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const progress = Math.min(scrollY / 700, 1);
        STATE.mouseParallax.targetY = progress * 0.85;
        STATE.mouseParallax.targetX = Math.sin(progress * Math.PI) * 0.55;
      }
    }, { passive: true });

    // Touchmove on window (moving fingers on mobile updates parallax)
    window.addEventListener('touchmove', (e) => {
      if (!STATE.isInteracting && e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const nx = (touch.clientX / window.innerWidth) * 2 - 1;
        const ny = (touch.clientY / window.innerHeight) * 2 - 1;
        STATE.mouseParallax.targetX = nx * 0.8;
        STATE.mouseParallax.targetY = ny * 0.8;
      }
    }, { passive: true });

    STATE.isInitialized = true;
    animate();
  }

  // 12. ANIMATION LOOP
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    // Heartbeat cold fusion breathing cycle
    if (STATE.coreLight && STATE.glowMat) {
      const pulseFactor = Math.sin(time * 3.4) * 0.15 + 0.85;
      const currentModeConfig = STATE.colorModes[STATE.currentMode];
      STATE.coreLight.intensity = currentModeConfig.intensity * pulseFactor;
      if (STATE.circuitMat) {
        STATE.circuitMat.emissiveIntensity = 0.45 * pulseFactor;
      }
    }

    // Ambient ion particle swirl
    if (STATE.particleSystem) {
      const positions = STATE.particleSystem.geometry.attributes.position.array;
      const velocities = STATE.particleSystem.velocities;
      for (let i = 0; i < velocities.length; i++) {
        const v = velocities[i];
        v.angle += v.speed;
        positions[i * 3] = Math.cos(v.angle) * v.radius;
        positions[i * 3 + 1] = Math.sin(v.angle) * v.radius;
        positions[i * 3 + 2] += v.zSpeed;
        if (Math.abs(positions[i * 3 + 2]) > 0.5) v.zSpeed *= -1;
      }
      STATE.particleSystem.geometry.attributes.position.needsUpdate = true;
    }

    // Exploded CAD View Interpolation
    const explodeTarget = STATE.isExploded ? 1.0 : 0.0;
    STATE.explodeProgress += (explodeTarget - STATE.explodeProgress) * 0.08;

    if (STATE.subAssemblies.bezel) {
      STATE.subAssemblies.bezel.position.z = STATE.explodeProgress * 1.6;
      
      if (STATE.subAssemblies.coils && STATE.subAssemblies.coils.userData.coilsList) {
        const list = STATE.subAssemblies.coils.userData.coilsList;
        list.forEach((coil, idx) => {
          const ang = (idx / list.length) * Math.PI * 2;
          const baseR = 0.94;
          const expandedR = baseR + STATE.explodeProgress * 0.65;
          coil.position.x = Math.cos(ang) * expandedR;
          coil.position.y = Math.sin(ang) * expandedR;
        });
      }

      if (STATE.subAssemblies.diffuser) {
        STATE.subAssemblies.diffuser.position.z = STATE.explodeProgress * 0.7;
      }
      if (STATE.subAssemblies.core) {
        STATE.subAssemblies.core.position.z = -STATE.explodeProgress * 0.6;
      }
      if (STATE.subAssemblies.base) {
        STATE.subAssemblies.base.position.y = -STATE.explodeProgress * 1.0;
      }
    }

    // Phone Docking Animation
    if (STATE.phoneMesh) {
      if (STATE.isPhoneDocked) {
        STATE.phoneMesh.visible = true;
        STATE.phoneMesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.12);
        STATE.phoneMesh.position.lerp(new THREE.Vector3(0, 0.42, 0.32), 0.12);
        STATE.phoneMesh.rotation.x = -0.16;
      } else {
        STATE.phoneMesh.scale.lerp(new THREE.Vector3(0.001, 0.001, 0.001), 0.15);
        STATE.phoneMesh.position.lerp(new THREE.Vector3(0, 0.42, 1.8), 0.15);
        if (STATE.phoneMesh.scale.x < 0.02) {
          STATE.phoneMesh.visible = false;
        }
      }
    }

    // Idle mouse parallax (only when user is not actively dragging with OrbitControls)
    if (!STATE.isInteracting && STATE.reactorGroup) {
      STATE.mouseParallax.x += (STATE.mouseParallax.targetX - STATE.mouseParallax.x) * 0.05;
      STATE.mouseParallax.y += (STATE.mouseParallax.targetY - STATE.mouseParallax.y) * 0.05;
      STATE.reactorGroup.rotation.y = STATE.mouseParallax.x * 0.25;
      STATE.reactorGroup.rotation.x = -0.16 + STATE.mouseParallax.y * 0.18;
    }

    if (STATE.controls) {
      STATE.controls.update();
    }

    if (STATE.renderer && STATE.scene && STATE.camera) {
      STATE.renderer.render(STATE.scene, STATE.camera);
    }
  }

  // 13. EXPOSED CONTROL METHODS
  function toggleExplode() {
    STATE.isExploded = !STATE.isExploded;
    const btn = document.getElementById('arcBtnExplode');
    if (btn) {
      btn.classList.toggle('active', STATE.isExploded);
      const label = btn.querySelector('.btn-label');
      if (label) label.textContent = STATE.isExploded ? 'Collapse CAD' : 'Explode CAD';
    }
    return STATE.isExploded;
  }

  function toggleDockPhone() {
    STATE.isPhoneDocked = !STATE.isPhoneDocked;
    const btn = document.getElementById('arcBtnDock');
    if (btn) {
      btn.classList.toggle('active', STATE.isPhoneDocked);
      const label = btn.querySelector('.btn-label');
      if (label) label.textContent = STATE.isPhoneDocked ? 'Undock Phone' : 'Dock Phone';
    }
    const statusText = document.getElementById('arcDockStatus');
    if (statusText) {
      statusText.textContent = STATE.isPhoneDocked ? '15.0W Fast Qi Induction: Connected' : 'Qi Wireless: Ready';
    }
    return STATE.isPhoneDocked;
  }

  function resetCamera() {
    if (STATE.camera && STATE.controls) {
      STATE.controls.reset();
      STATE.camera.position.set(0, 0.25, 4.4);
      STATE.controls.target.set(0, 0.25, 0);
    }
  }

  function setColorMode(mode) {
    if (!STATE.colorModes[mode]) return;
    STATE.currentMode = mode;
    const cfg = STATE.colorModes[mode];

    if (STATE.coreLight) STATE.coreLight.color.setHex(cfg.hex);
    if (STATE.frontLight) STATE.frontLight.color.setHex(cfg.hex);
    if (STATE.glowMat) STATE.glowMat.color.setHex(cfg.hex);
    if (STATE.orbMat) STATE.orbMat.color.setHex(cfg.hex);
    if (STATE.circuitMat) STATE.circuitMat.emissive.setHex(cfg.hex);
    if (STATE.particleSystem) STATE.particleSystem.material.color.setHex(cfg.hex);

    document.querySelectorAll('.arc-spectrum-dot').forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('data-mode') === mode);
    });

    const modeNameEl = document.getElementById('arcSpectrumName');
    if (modeNameEl) modeNameEl.textContent = cfg.name;
  }

  function toggleVitrine() {
    STATE.isVitrineVisible = !STATE.isVitrineVisible;
    if (STATE.vitrineMesh) {
      STATE.vitrineMesh.visible = STATE.isVitrineVisible;
    }
    const btn = document.getElementById('arcBtnVitrine');
    if (btn) {
      btn.classList.toggle('active', STATE.isVitrineVisible);
      const label = btn.querySelector('.btn-label');
      if (label) label.textContent = STATE.isVitrineVisible ? 'Remove Vitrine' : 'Glass Vitrine';
    }
    const statusText = document.getElementById('arcDockStatus');
    if (statusText) {
      statusText.textContent = STATE.isVitrineVisible ? 'Pepper Potts Memorial Vitrine: Display Active' : '360° Drag Orbit • Scroll Zoom';
    }
    return STATE.isVitrineVisible;
  }

  // Export to global scope
  window.ArcReactor3D = {
    init: init,
    toggleExplode: toggleExplode,
    toggleDockPhone: toggleDockPhone,
    toggleVitrine: toggleVitrine,
    resetCamera: resetCamera,
    setColorMode: setColorMode,
    getState: function() { return STATE; }
  };

})(window);
