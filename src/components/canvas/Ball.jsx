import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
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
        // Render a static 2D-like ball for mobile
        <mesh castShadow receiveShadow scale={2.5}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#722F37" // Red wine color
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0, 0]} // No rotation for mobile
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      ) : (
        // Render a fully interactive 3D ball for PC
        <mesh castShadow receiveShadow scale={3}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#722F37" // Red wine color
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]} // Keep rotation for PC
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
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
      style={{ background: "transparent" }} // Set canvas background to transparent
    >
      <Suspense fallback={<CanvasLoader />}>
        {!isMobile && <OrbitControls enableZoom={false} enablePan />}
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
