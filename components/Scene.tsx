"use client";

import { Canvas } from "@react-three/fiber";
import SpinningCube from "./SpinningCube";
import { Environment, PresentationControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Adjusted Y position to be closer to such header */}
        <PresentationControls
          global
          snap={true}
          speed={1.5}
          zoom={1}
          polar={[-Math.PI / 2, Math.PI / 2]}
          azimuth={[-1, 1]}
        >
            <SpinningCube position={[0, 0, 0]} scale={0.3} />
        </PresentationControls>
        <Environment preset="apartment" />
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0} 
            luminanceSmoothing={0.9} 
            height={300} 
            opacity={8} 
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
