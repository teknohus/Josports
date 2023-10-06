import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Fielder } from "./components/Fielder";

function App() {
  const [rotationValue, setRotationValue] = useState(31.05);

  const rotateLeft = () => {
    setRotationValue(
      (prevVal) => (prevVal - Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)
    );
  };

  const rotateRight = () => {
    setRotationValue((prevVal) => (prevVal + Math.PI / 2) % (2 * Math.PI));
  };

  return (
    <div className="glove py-12">
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="md:col-span-7 xl:col-span-8">
            <div className="canvas-carousel sc-jWBwVP kufCep flickity-enabled">
              <div
                className="flickity-viewport"
                style={{ height: "752px", touchAction: "pan-y" }}
              >
                <div
                  className="flickity-slider"
                  style={{ left: "0px", transform: "translateX(0%)" }}
                >
                  <div
                    aria-selected="true"
                    className="is-selected"
                    style={{ position: "absolute", left: "0%" }}
                  >
                    <div
                      id="canvas--BASEBALL_FIELDING_PRO_44--BACK"
                      className="responsive-canvas-wrap sc-brqgnP hDShiW"
                      style={{ height: "752px" }}
                    >
                      <Canvas
                        shadows
                        dpr={[1, 2]}
                        width={750}
                        height={750}
                        className="sc-cMljjf jjRdFm lower-canvas"
                        style={{ width: "750px", height: "750px" }}
                      >
                        <ambientLight intensity={0.7} />
                        <directionalLight
                          intensity={1}
                          position={[10, 15, 10]}
                        />
                        <pointLight intensity={1} position={[-10, 10, -10]} />

                        <Fielder
                          rot={rotationValue}
                        />

                        {/* <OrbitControls
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                        enableZoom={true}
                        enablePan={false}
                      /> */}
                      </Canvas>
                    </div>
                  </div>
                </div>
                <button
                  onClick={rotateLeft}
                  className="flickity-button flickity-prev-next-button previous"
                  type="button"
                  aria-label="Previous"
                >
                  <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                    />
                  </svg>
                </button>
                <button
                  onClick={rotateRight}
                  className="flickity-button flickity-prev-next-button next"
                  type="button"
                  aria-label="Next"
                >
                  <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(180) "
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
