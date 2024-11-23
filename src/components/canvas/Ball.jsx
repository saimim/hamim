import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const isMobile = window.innerWidth <= 768;

  return (
    <React.Fragment>
      {isMobile ? (
        <mesh castShadow receiveShadow scale={2.5}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#8B4513" // Brown color for mobile
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      ) : (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh castShadow receiveShadow scale={3}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color="#8B4513" // Brown color for PC
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
            <Decal
              position={[0, 0, 1]}
              rotation={[2 * Math.PI, 0, 6.25]}
              scale={1}
              map={decal}
              flatShading
            />
          </mesh>
        </Float>
      )}
    </React.Fragment>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? "demand" : "always"}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: !isMobile }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={!isMobile} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
