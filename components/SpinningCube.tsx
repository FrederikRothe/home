"use client";

import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function SpinningCube(props: ThreeElements['mesh']) {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<any>(null); // Ref for the material to update opacity directly without re-renders

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Fade in effect
    if (materialRef.current && materialRef.current.opacity < 0.4) {
      materialRef.current.opacity += 0.005; // Fade speed
    }

    const time = state.clock.getElapsedTime();
    const scrollY = window.scrollY;
    
    // Spin only on Y axis with a slight tilt
    meshRef.current.rotation.x = 0.4; // Slight tilt
    meshRef.current.rotation.y = time * 0.2 + scrollY * 0.002;
    meshRef.current.rotation.z = 0.2; // Slight tilt
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[10, 10, 10]} />
      {/* Graphite color to blend with background */}
      <meshStandardMaterial ref={materialRef} color="#333333" roughness={0.4} metalness={0.7} transparent opacity={0} />
    </mesh>
  );
}
