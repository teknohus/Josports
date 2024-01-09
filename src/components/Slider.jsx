import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Canvas } from '@react-three/fiber';
import { FielderGlove } from './loaders/FielderGlove';
import { OrthographicCamera } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { flags } from "./constants";


function CameraControl() {

  const camera = useRef() 
  
  useFrame(({ camera }) => {
    camera.position.set(0, 0, -100)
    camera.lookAt(0, 0, 0)
  })

  return <OrthographicCamera makeDefault zoom={120} ref={camera} />;

}

const ProductSlideshow = ({rot, baseConfig, colors, personlizeConfig, personlizationConfig, textures}) => {
  const mainSlider = useRef(null);
  const navSlider = useRef(null);
  // const [rotationValue, setRotationValue] = useState(Math.PI);
  // const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  // const publicUrl = '/josports/wp-content/reactpress/apps/demo/build';

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    asNavFor: navSlider.current,
  };

  // const sliderNavSettings = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots: false,
  //   arrows: false,
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  //   asNavFor: mainSlider.current,
  // };

  // const handleThumbnailClick = (index) => {
  //   setSelectedThumbnailIndex(index);
  //   mainSlider.current.slickGoTo(index);
  // };

  const render3DScene = (rotation) => (
    <Canvas className="m-auto" shadows style={{ width: "733px", height: "712px" }} >
      <CameraControl />
      <scene >
        <ambientLight intensity={0.3} color={'#ffffff'} />
        <directionalLight intensity={0.25 * Math.PI} color={'#ffffff'} position={[0, 0, 0.866]} />
        <directionalLight intensity={0.25 * Math.PI} color={'#ffffff'} position={[0, 0, -0.866]} />
        <FielderGlove rot={rotation * (Math.PI / 2)} base={baseConfig} colors={colors} textures={textures} personalize={personlizeConfig} personalizeConfig={personlizationConfig} flags={flags} />
      </scene>
    </Canvas>
  );

  // const renderThumbnail = (index, rotation) => (
  //   <div onClick={() => handleThumbnailClick(index)}>
  //     <div className="product-img-box">
  //       <Canvas Canvas className="m-auto" shadows dpr={[1, 2]} style={{ width: "238px", height: "146px" }} >
  //         <CameraControl />
  //         <scene >
  //           <ambientLight intensity={0.3} color={'#ffffff'} />
  //           <directionalLight intensity={0.25 * Math.PI} color={'#ffffff'} position={[0, 0, 0.866]} />
  //           <directionalLight intensity={0.25 * Math.PI} color={'#ffffff'} position={[0, 0, -0.866]} />

  //           <FielderGlove rot={rotation * (Math.PI / 2)} base={baseConfig} colors={colors} textures={textures} personalize={personlizeConfig} personalizeConfig={personlizationConfig} flags={flags} />
  //           {/* <FielderGlove rot={rotationValue} /> */}
            
  //         </scene>
  //       </Canvas>
  //     </div>
  //   </div>
  // );

  return (
    <div className="col-lg-6 col-xl-7">
      <div className="slideshow-area">
        <Slider {...sliderSettings} className="product-slideshow" ref={mainSlider}>
          {/* Your main slideshow images */}
          {[2, 3, 0, 1].map((index) => (
            <div key={index} className="slide slick-slide slick-cloned">
              <div className="product-img-box">
                  {render3DScene(index)}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlideshow;
