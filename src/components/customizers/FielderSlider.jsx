import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Canvas } from '@react-three/fiber';
import { New } from "../loaders/FielderGlove" ;
import { OrthographicCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { flags } from "../constants";

function CameraControl() {
  const camera = useRef();

  useFrame(({ camera }) => {
    camera.position.set(0, 0, -100);
    camera.lookAt(0, 0, 0);
  });

  return <OrthographicCamera makeDefault zoom={120} ref={camera} />;
}

const Scene3D = ({ rotation, baseConfig, colors, personlizeConfig, personlizationConfig, textures, xPosition, yPosition, zPosition, xRotation, yRotation, zRotation }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} className="m-auto" shadows dpr={[1, 2]} height={712} style={{ width: "100%", height: "712px" }}>
      <CameraControl />
      <scene>
        <ambientLight intensity={0.3} color={'#ffffff'} />
        <directionalLight intensity={0.25 * Math.PI} color={'#ffffff'} position={[0, 0, 0.866]} />
        <directionalLight intensity={0.25 * Math.PI} color={'#ffffff'} position={[0, 0, -0.866]} />
        <New
          rot={rotation * (-Math.PI / 2)}
          base={baseConfig}
          colors={colors}
          textures={textures}
          personalize={personlizeConfig}
          personalizeConfig={personlizationConfig}
          flags={flags}
          xPosition={xPosition}
          yPosition={yPosition}
          zPosition={zPosition}
          xRotation={xRotation}
          yRotation={yRotation}
          zRotation={zRotation}
        />
      </scene>
    </Canvas>
  );
};

const ProductSlideshow = ({ baseConfig, colors, personlizeConfig, personlizationConfig, textures, xPosition, yPosition, zPosition, xRotation, yRotation, zRotation }) => {
  const mainSlider = useRef(null);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };
  

  return (
    <div className="col-lg-6 col-xl-7">
      <div className="slideshow-area">
        <Slider {...sliderSettings} className="product-slideshow" ref={mainSlider}>
          {[2, 3, 0, 1].map((index) => (
            <div key={index} className="slide slick-slide slick-cloned">
              <div className="product-img-box">
                <Scene3D
                  rotation={index}
                  baseConfig={baseConfig}
                  colors={colors}
                  textures={textures}
                  personlizeConfig={personlizeConfig}
                  personlizationConfig={personlizationConfig}
                  flags={flags}
                  xPosition={xPosition}
                  yPosition={yPosition}
                  zPosition={zPosition}
                  xRotation={xRotation}
                  yRotation={yRotation}
                  zRotation={zRotation}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlideshow;
