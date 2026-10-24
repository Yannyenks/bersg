import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Besrg3DFallback } from './Besrg3DFallback.tsx';
import { Maximize2, Minimize2, RotateCcw, Sliders } from 'lucide-react';

interface BesrgDimensionSceneProps {
  scrollY?: number;
  interactive?: boolean;
  className?: string;
}

export const BesrgDimensionScene: React.FC<BesrgDimensionSceneProps> = ({
  scrollY = 0,
  interactive = true,
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);
  const [isZenMode, setIsZenMode] = useState<boolean>(false);
  const [isHudCollapsed, setIsHudCollapsed] = useState<boolean>(false);
  const [explodedVal, setExplodedVal] = useState<number>(0);
  const [activePreset, setActivePreset] = useState<'front' | 'iso' | 'top' | 'dynamic'>('iso');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Mutable refs for render loop
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    mainGroup: THREE.Group;
    topPrism: THREE.Mesh;
    baseCyan: THREE.Mesh;
    baseCrimson: THREE.Mesh;
    coreNucleus: THREE.Mesh;
    orbitRing1: THREE.Line;
    orbitRing2: THREE.Line;
    particles: THREE.Points;
    targetRotation: { x: number; y: number };
    targetCameraPos: THREE.Vector3;
    explodedTarget: number;
    frameId: number;
    clock: THREE.Clock;
    isSoftwareGl: boolean;
  } | null>(null);

  // Initialize Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL guard
    let isSoftwareGl = false;
    try {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      const rendererStr = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
      if (/SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(String(rendererStr))) {
        isSoftwareGl = true;
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setWebGlSupported(false);
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    // 1. Scene & Camera (Immersive Studio Environment)
    const scene = new THREE.Scene();
    scene.background = null; // transparent to blend with hero background
    scene.fog = null;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 5.8);

    // 2. Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebGlSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 3. Studio Environment Reflection via RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Studio Lighting Rig for White Architecture
    const ambientLight = new THREE.HemisphereLight('#FFFFFF', '#E2E8F0', 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight('#FFFFFF', 2.6);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    // Cyan Rim Light (accentuating left facet)
    const cyanRim = new THREE.DirectionalLight('#00B2F6', 2.2);
    cyanRim.position.set(-6, 2, -2);
    scene.add(cyanRim);

    // Crimson Rim Light (accentuating right facet)
    const crimsonRim = new THREE.DirectionalLight('#F82649', 2.0);
    crimsonRim.position.set(6, -2, -2);
    scene.add(crimsonRim);

    // 5. Build Procedural Monumental Prism (The BESRG Dimension)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials matching the official logo
    const deepTealMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#054859'),
      metalness: 0.88,
      roughness: 0.16,
      clearcoat: 0.7,
      clearcoatRoughness: 0.12,
      reflectivity: 0.9,
    });

    const cyanMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#00B2F6'),
      emissive: new THREE.Color('#00B2F6'),
      emissiveIntensity: 0.22,
      metalness: 0.82,
      roughness: 0.15,
      clearcoat: 0.8,
    });

    const crimsonMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#F82649'),
      emissive: new THREE.Color('#F82649'),
      emissiveIntensity: 0.22,
      metalness: 0.82,
      roughness: 0.15,
      clearcoat: 0.8,
    });

    // --- Part A: Top Triangular Prism (Deep Petrol Teal #054859) ---
    const topShape = new THREE.Shape();
    topShape.moveTo(0, 1.25);
    topShape.lineTo(-1.12, 0.08);
    topShape.lineTo(1.12, 0.08);
    topShape.closePath();

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 2,
      depth: 0.42,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.05,
      bevelSegments: 4,
    };

    const topGeometry = new THREE.ExtrudeGeometry(topShape, extrudeSettings);
    topGeometry.center();
    const topPrism = new THREE.Mesh(topGeometry, deepTealMaterial);
    topPrism.position.set(0, 0.65, 0);
    topPrism.castShadow = !isSoftwareGl;
    topPrism.receiveShadow = !isSoftwareGl;
    mainGroup.add(topPrism);

    // --- Part B: Base Left Segment (Electric Cyan #00B2F6) ---
    const cyanShape = new THREE.Shape();
    cyanShape.moveTo(-1.18, -0.06);
    cyanShape.lineTo(-0.06, -0.06);
    cyanShape.lineTo(-0.06, -0.84);
    cyanShape.lineTo(-1.64, -0.84);
    cyanShape.closePath();

    const baseExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 2,
      depth: 0.40,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.04,
      bevelSegments: 3,
    };

    const cyanGeometry = new THREE.ExtrudeGeometry(cyanShape, baseExtrudeSettings);
    cyanGeometry.center();
    const baseCyan = new THREE.Mesh(cyanGeometry, cyanMaterial);
    baseCyan.position.set(-0.76, -0.45, 0);
    baseCyan.castShadow = !isSoftwareGl;
    mainGroup.add(baseCyan);

    // --- Part C: Base Right Segment (Crimson Red #F82649) ---
    const crimsonShape = new THREE.Shape();
    crimsonShape.moveTo(0.06, -0.06);
    crimsonShape.lineTo(1.18, -0.06);
    crimsonShape.lineTo(1.64, -0.84);
    crimsonShape.lineTo(0.06, -0.84);
    crimsonShape.closePath();

    const crimsonGeometry = new THREE.ExtrudeGeometry(crimsonShape, baseExtrudeSettings);
    crimsonGeometry.center();
    const baseCrimson = new THREE.Mesh(crimsonGeometry, crimsonMaterial);
    baseCrimson.position.set(0.76, -0.45, 0);
    baseCrimson.castShadow = !isSoftwareGl;
    mainGroup.add(baseCrimson);

    // --- Part D: Internal Glowing Crystalline Nucleus ---
    const nucleusGeo = new THREE.OctahedronGeometry(0.24, 0);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: '#00B2F6',
      emissive: '#00B2F6',
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.85,
    });
    const coreNucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreNucleus.position.set(0, 0.45, 0.32);
    mainGroup.add(coreNucleus);

    // --- Part E: Subtle Orbit Geometry Datum Lines ---
    const ringRadius1 = 2.2;
    const ringPoints1: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      ringPoints1.push(new THREE.Vector3(Math.cos(theta) * ringRadius1, Math.sin(theta) * ringRadius1, 0));
    }
    const ringGeo1 = new THREE.BufferGeometry().setFromPoints(ringPoints1);
    const ringMat1 = new THREE.LineBasicMaterial({
      color: '#054859',
      transparent: true,
      opacity: 0.18,
    });
    const orbitRing1 = new THREE.Line(ringGeo1, ringMat1);
    orbitRing1.rotation.x = Math.PI * 0.38;
    orbitRing1.rotation.y = Math.PI * 0.15;
    mainGroup.add(orbitRing1);

    const ringRadius2 = 1.9;
    const ringPoints2: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      ringPoints2.push(new THREE.Vector3(Math.cos(theta) * ringRadius2, 0, Math.sin(theta) * ringRadius2));
    }
    const ringGeo2 = new THREE.BufferGeometry().setFromPoints(ringPoints2);
    const ringMat2 = new THREE.LineBasicMaterial({
      color: '#F82649',
      transparent: true,
      opacity: 0.15,
    });
    const orbitRing2 = new THREE.Line(ringGeo2, ringMat2);
    orbitRing2.rotation.z = Math.PI * 0.2;
    mainGroup.add(orbitRing2);

    // --- Part F: Contact Shadow Grounding on White Floor ---
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.22)');
      grad.addColorStop(0.5, 'rgba(5, 72, 89, 0.08)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    shadowTex.colorSpace = THREE.SRGBColorSpace;
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(4.4, 4.4),
      new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        depthWrite: false,
        opacity: 0.8,
      })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.55;
    scene.add(shadowPlane);

    // --- Part G: Floating Micro-Particles ---
    const particleCount = isSoftwareGl ? 20 : 50;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 6;
      particlePos[i + 1] = (Math.random() - 0.5) * 5;
      particlePos[i + 2] = (Math.random() - 0.5) * 5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: '#00B2F6',
      size: 0.03,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Initial group positioning
    mainGroup.position.set(0, 0, 0);
    mainGroup.rotation.set(0.05, -0.25, 0);

    const clock = new THREE.Clock();

    sceneRef.current = {
      renderer,
      scene,
      camera,
      mainGroup,
      topPrism,
      baseCyan,
      baseCrimson,
      coreNucleus,
      orbitRing1,
      orbitRing2,
      particles,
      targetRotation: { x: 0.05, y: -0.25 },
      targetCameraPos: new THREE.Vector3(0, 0.4, 5.8),
      explodedTarget: 0,
      frameId: 0,
      clock,
      isSoftwareGl,
    };

    // Resize handler
    const handleResize = () => {
      if (!container || !sceneRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      sceneRef.current.camera.aspect = w / h;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Mouse movement interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current || !interactive || isSoftwareGl) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      // Subtle tilt based on cursor
      sceneRef.current.targetRotation.x = y * 0.25 + 0.05;
      sceneRef.current.targetRotation.y = x * 0.35 - 0.25;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Continuous Animation Loop
    let running = true;
    const animate = () => {
      if (!running || !sceneRef.current) return;
      const state = sceneRef.current;
      const delta = Math.min(state.clock.getDelta(), 0.1);
      const elapsedTime = state.clock.getElapsedTime();

      // Smooth mouse follow
      state.mainGroup.rotation.x = THREE.MathUtils.damp(
        state.mainGroup.rotation.x,
        state.targetRotation.x,
        4.5,
        delta
      );

      // Auto rotation slow drift
      if (autoRotate) {
        state.mainGroup.rotation.y += delta * 0.22;
      } else {
        state.mainGroup.rotation.y = THREE.MathUtils.damp(
          state.mainGroup.rotation.y,
          state.targetRotation.y,
          4.5,
          delta
        );
      }

      // Smooth camera position damping
      state.camera.position.lerp(state.targetCameraPos, 0.05);

      // Exploded View kinematics
      const curExplode = state.explodedTarget;
      state.topPrism.position.y = THREE.MathUtils.damp(
        state.topPrism.position.y,
        0.65 + curExplode * 0.8,
        5.0,
        delta
      );
      state.baseCyan.position.x = THREE.MathUtils.damp(
        state.baseCyan.position.x,
        -0.76 - curExplode * 0.6,
        5.0,
        delta
      );
      state.baseCyan.position.y = THREE.MathUtils.damp(
        state.baseCyan.position.y,
        -0.45 - curExplode * 0.4,
        5.0,
        delta
      );
      state.baseCrimson.position.x = THREE.MathUtils.damp(
        state.baseCrimson.position.x,
        0.76 + curExplode * 0.6,
        5.0,
        delta
      );
      state.baseCrimson.position.y = THREE.MathUtils.damp(
        state.baseCrimson.position.y,
        -0.45 - curExplode * 0.4,
        5.0,
        delta
      );

      // Core nucleus rotation
      state.coreNucleus.rotation.x += delta * 1.2;
      state.coreNucleus.rotation.y += delta * 1.5;
      state.coreNucleus.position.y = 0.45 + Math.sin(elapsedTime * 2.0) * 0.05;

      // Orbit rings spin
      state.orbitRing1.rotation.z += delta * 0.25;
      state.orbitRing2.rotation.y -= delta * 0.2;

      // Particle subtle drifting
      state.particles.rotation.y = elapsedTime * 0.03;

      state.renderer.render(state.scene, state.camera);
      state.frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.frameId);
        sceneRef.current.renderer.dispose();
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sceneRef.current = null;
    };
  }, [interactive]);

  // Sync scroll effect
  useEffect(() => {
    if (!sceneRef.current) return;
    const progress = Math.min(scrollY / 700, 1.2);
    sceneRef.current.mainGroup.position.y = -progress * 0.6;
    sceneRef.current.mainGroup.rotation.z = progress * 0.12;
  }, [scrollY]);

  // Sync Exploded View
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.explodedTarget = explodedVal;
    }
  }, [explodedVal]);

  // Camera presets handler
  const setCameraPreset = useCallback((preset: 'front' | 'iso' | 'top' | 'dynamic') => {
    setActivePreset(preset);
    if (!sceneRef.current) return;
    switch (preset) {
      case 'front':
        sceneRef.current.targetCameraPos.set(0, 0, 5.2);
        sceneRef.current.targetRotation.x = 0;
        sceneRef.current.targetRotation.y = 0;
        setAutoRotate(false);
        break;
      case 'iso':
        sceneRef.current.targetCameraPos.set(2.4, 1.6, 5.0);
        sceneRef.current.targetRotation.x = 0.15;
        sceneRef.current.targetRotation.y = -0.35;
        setAutoRotate(true);
        break;
      case 'top':
        sceneRef.current.targetCameraPos.set(0, 4.8, 1.5);
        sceneRef.current.targetRotation.x = -Math.PI * 0.25;
        sceneRef.current.targetRotation.y = 0;
        setAutoRotate(false);
        break;
      case 'dynamic':
        sceneRef.current.targetCameraPos.set(-2.2, 0.8, 4.8);
        sceneRef.current.targetRotation.x = 0.08;
        sceneRef.current.targetRotation.y = 0.45;
        setAutoRotate(true);
        break;
    }
  }, []);

  if (!webGlSupported) {
    return <Besrg3DFallback />;
  }

  return (
    <div
      className={`relative w-full h-full min-h-[500px] overflow-hidden select-none transition-all duration-700 ${
        isZenMode ? 'fixed inset-0 z-50 bg-white' : ''
      } ${className}`}
    >
      {/* Three.js Canvas Container (isolated inside mountRef) */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Zen Mode Header / Controls */}
      {isZenMode && (
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-auto z-10">
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B2F6]" />
            <span className="font-display text-sm font-semibold tracking-wider text-[#054859]">
              THE BESRG DIMENSION • ZEN EXPERIENCE
            </span>
          </div>

          <button
            onClick={() => setIsZenMode(false)}
            className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2 rounded-lg border border-slate-200 shadow-sm transition-colors text-xs font-medium cursor-pointer"
          >
            <Minimize2 className="w-4 h-4 text-[#00B2F6]" />
            <span>Quitter le mode Zen</span>
          </button>
        </div>
      )}

      {/* Unified Bottom Ergonomic Control Dock (Consolidated bottom-center dock on clean white) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[760px] pointer-events-auto z-20">
        {/* Toggle Collapse bar */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsHudCollapsed(!isHudCollapsed)}
            className="px-3 py-1 text-[11px] font-mono tracking-wider text-slate-600 hover:text-slate-900 bg-white/95 border border-b-0 border-slate-200 rounded-t-md backdrop-blur-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Sliders className="w-3 h-3 text-[#00B2F6]" />
            <span>{isHudCollapsed ? 'Afficher les contrôles 3D' : 'Masquer les contrôles'}</span>
          </button>
        </div>

        {/* Dock panel */}
        {!isHudCollapsed && (
          <div className="glass-panel p-3 sm:p-4 rounded-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border border-slate-200/90">
            {/* Camera angle pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mr-1 hidden md:inline">
                Vue:
              </span>
              {(['iso', 'front', 'top', 'dynamic'] as const).map(preset => (
                <button
                  key={preset}
                  onClick={() => setCameraPreset(preset)}
                  className={`px-2.5 py-1.5 rounded text-[11px] font-medium transition-all cursor-pointer capitalize ${
                    activePreset === preset
                      ? 'bg-[#054859] text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {preset === 'iso' ? 'Isométrique' : preset === 'front' ? 'Statutaire' : preset === 'top' ? 'Zénith' : 'Dynamique'}
                </button>
              ))}
            </div>

            {/* Exploded View Slider */}
            <div className="flex items-center gap-2 w-full sm:w-44 px-2">
              <span className="text-[10px] font-mono uppercase text-slate-500 shrink-0">Éclaté:</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={explodedVal}
                onChange={e => setExplodedVal(parseFloat(e.target.value))}
                className="w-full accent-[#00B2F6] bg-slate-200 h-1.5 rounded cursor-pointer"
                aria-label="Contrôle de décomposition éclatée 3D"
              />
              <span className="font-mono text-[10px] text-[#054859] font-bold w-6 text-right">
                {Math.round(explodedVal * 100)}%
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-1.5 rounded border border-slate-200 transition-colors cursor-pointer ${
                  autoRotate ? 'bg-[#054859]/10 text-[#054859] border-[#054859]/30' : 'text-slate-500 hover:text-slate-900 bg-white'
                }`}
                title={autoRotate ? 'Désactiver rotation auto' : 'Activer rotation auto'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsZenMode(!isZenMode)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer shadow-sm"
                title="Plein écran Zen Mode"
              >
                {isZenMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5 text-[#00B2F6]" />}
                <span className="hidden sm:inline text-[11px] font-medium">Mode Zen</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
