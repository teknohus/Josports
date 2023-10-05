import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Fielder } from "./components/Fielder";


function App() {
  return (
    <div>
      <Canvas
        shadows
        dpr={[1, 2]}
        width={750}
        height={750}
        className="sc-cMljjf jjRdFm lower-canvas"
        style={{ width: "750px", height: "750px" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight intensity={1} position={[10, 15, 10]} />
        <pointLight intensity={1} position={[-10, 10, -10]} />
        <Fielder/>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={true}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default App;
