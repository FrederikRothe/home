"use client";

import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function SpinningCube(props: ThreeElements['group']) {
  const meshRef = useRef<Mesh>(null);
  const wireframeRef = useRef<Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (!meshRef.current || !wireframeRef.current) return;
    
    // Fade in effect
    if (materialRef.current && materialRef.current.opacity < 0.2) {
      materialRef.current.opacity += 0.005; 
    }

    const time = state.clock.getElapsedTime();
    
    // Complex rotation for the main mesh
    meshRef.current.rotation.x = time * 0.05;
    meshRef.current.rotation.y = time * 0.075;
    meshRef.current.rotation.z = time * 0.025;

    // Counter-rotation for the wireframe
    wireframeRef.current.rotation.x = -(time * 0.05);
    wireframeRef.current.rotation.y = -(time * 0.075);
    wireframeRef.current.rotation.z = -(time * 0.025);
  });

  return (
    <group {...props} dispose={null}>
      {/* Main Glassy Polyhedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[7, 0]} />
        <meshPhysicalMaterial 
          ref={materialRef}
          color="#888888" 
          roughness={0} 
          metalness={0.9} 
          transmission={0.6} // Glass-like
          thickness={2}
          transparent 
          opacity={0} 
          wireframe={false}
        />
      </mesh>

      {/* Wireframe Overlay */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[9, 1]} /> 
        <meshBasicMaterial 
          color={[10, 20, 40]} // High dynamic range color for bloom
          wireframe={true} 
          transparent 
          opacity={2}
          toneMapped={false} // Essential for bloom
        />
      </mesh>
    </group>
  );
}
