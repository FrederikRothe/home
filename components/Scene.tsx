import { Canvas } from "@react-three/fiber";
import SpinningCube from "./SpinningCube";
import { Environment, PresentationControls } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Adjusted Y position to be closer to such header */}
        <PresentationControls
          global
          snap={true}
          speed={1.5}
          zoom={1}
          polar={[-0.1, 0.1]}
          azimuth={[-1, 1]}
        >
            <SpinningCube position={[0, 0, 0]} scale={0.3} />
        </PresentationControls>
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
