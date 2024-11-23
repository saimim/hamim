import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const SimpleCube = ({ isMobile }) => {
  return (
    <mesh>
      <ambientLight intensity={isMobile ? 0.2 : 0.4} />
      <spotLight
        position={[-10, 10, 5]}
        angle={0.15}
        intensity={1}
        castShadow
      />
      <boxGeometry args={[isMobile ? 1 : 1.5, isMobile ? 1 : 1.5, isMobile ? 1 : 1.5]} />
      <meshStandardMaterial color="#915EFF" />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 2, 5], fov: isMobile ? 40 : 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <SimpleCube isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
