import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { FielderGlove } from "../loaders/FielderGlove" ;
import { useFrame } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { meshOptions, colorData, colorPalette, tabs, textureData, colorStepsConfig, baseOptions, personlizationOptions, personlizationConfig, Options, baseStepsConfig, flags } from "../constants";
// import Controls from "../customizers/controls";

function CameraControl() {

  const camera = useRef() 
  
  useFrame(({ camera }) => {
    camera.position.set(0, 0, -100)
    camera.lookAt(0, 0, 0)
  })

  return <OrthographicCamera makeDefault zoom={120} ref={camera} />;

}

export default function Fielder() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [rotationValue, setRotationValue] = useState(Math.PI);
  const [currentMesh, setCurrentMesh] = useState("binding");
  const [colors, setColors] = useState(colorData);
  const [textures, setTextures] = useState(textureData);
  const [colorSteps, setColorSteps] = useState(colorStepsConfig);
  const [currentBase, setCurrentBase] = useState("size");
  const [baseConfig, setBaseConfig] = useState(baseOptions);
  const [baseSteps, setBaseSteps] = useState(baseStepsConfig);
  const [personilzeSteps, setPersonalizeSteps] = useState(personlizationConfig);
  const [personlizeConfig, setPersonlizeConfig] = useState(personlizationOptions);
  const [currentPersonlize, setCurrentPersonlize] = useState("Thumb Logo/Graphic");
  const [data, setData] = useState(Options)

  // const [xPosition, setXPosition] = useState(9.25);
  // const [yPosition, setYPosition] = useState( 0.039);
  // const [zPosition, setZPosition] = useState(0.023);

  // const [xRotation, setXRotation] = useState(2.915);
  // const [yRotation, setYRotation] = useState(1.132);
  // const [zRotation, setZRotation] = useState(-0.6625);
  
  const rotateLeft = () => {
    setRotationValue(
      (prevVal) => (prevVal - Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)
    );
  };

  const rotateRight = () => {
    setRotationValue((prevVal) => (prevVal + Math.PI / 2) % (2 * Math.PI));
  };

  const handleColorChange = (meshName, newColor) => {
    setTextures((prevData) => ({
      ...prevData,
      [meshName]: null,
    }));
    setColors((prevColors) => ({
      ...prevColors,
      [meshName]: newColor,
    }));
  };

  const handleTextureChange = (meshName, img) => {
    setColors((prevColors) => ({
      ...prevColors,
      [meshName]: colorData[meshName],
    }));
    setTextures((prevData) => ({
      ...prevData,
      [meshName]: img,
    }));

  };

  const handlePeronalizeChangeText = (e) => {
    let value = e.target.value;

    if (data[currentPersonlize].texttype === "number"){
      if(value.length > 2) {
        value = value.slice(0, 2);
      }
      setPersonlizeConfig((prevOption) => ({
        ...prevOption,
        [currentPersonlize]: value,
      }));
    }
    else{
      if(value.length > 17) {
        value = value.slice(0, 17);
      }
      setPersonlizeConfig((prevOption) => ({
        ...prevOption,
        [currentPersonlize + " Text"]: value,
      }));
    }

  }

  const handlePeronalizeChangeColor = (option, value) => {
    const opt = option + " Color"
    setPersonlizeConfig((prevOption) => ({
      ...prevOption,
      [opt]: value,
    }));
  }

  const handlePeronalizeChange = (option, value) => {
    if (personlizeConfig[option] === value) {
      // If clicking on already selected option, set to null 
      value = null; 
    }
    if (option === 'Thumb Text'){
      const thumbText = data["Thumb Text"];
      setData(prevState => ({
        ...prevState,
        "Thumb Text": {
          ...thumbText, 
          textbox: value === "Thumb Text",
          colors: value === "Thumb Text" ? colorPalette : null
        } 
      }))  
    }
    if (option === 'Pinky Text'){
      const pinkyText = data["Pinky Text"];
      setData(prevState => ({
        ...prevState,
        "Pinky Text": {
          ...pinkyText, 
          textbox: value === "Pinky Text",
          colors: value === "Pinky Text" ? colorPalette : null
        } 
      }))  
    }
    if (option === 'Palm Text'){
      const palmText = data["Palm Text"];
      setData(prevState => ({
        ...prevState,
        "Palm Text": {
          ...palmText, 
          textbox: value === "Palm Text",
          colors: value === "Palm Text" ? colorPalette : null
        } 
      }))  
    }
    

    if (option === 'Thumb Logo/Graphic' && value === null){
      value = 'Home Plate Logo'; 
    }

    setPersonlizeConfig((prevOption) => ({
      ...prevOption,
      [option]: value,
    }));

    if(option === 'Thumb Logo/Graphic' && value === 'Home Plate Logo') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Home Plate": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Home Plate Logo') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Home Plate": false
      }));
    }
    if(option === 'Thumb Logo/Graphic' && value === 'Custom Plate Number (+$7)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Home Plate": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Custom Plate Number (+$7)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Home Plate": false
      }));
    }

    if(option === 'Thumb Logo/Graphic' && value === 'Graphic (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Thumb Graphic": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Graphic (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Thumb Graphic": false
      }));
    }
    if(option === 'Thumb Logo/Graphic' && value === 'Premium Graphic (+$15)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Premium Graphic": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Premium Graphic (+$15)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Premium Graphic": false
      }));
    }
    if(option === 'Thumb Logo/Graphic' && value === 'Jumbo Number (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Jumbo Number": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Jumbo Number (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Jumbo Number": false
      }));
    }
    if(option === 'Thumb Logo/Graphic' && value === 'Stamped Flag (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Stamped Flag": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Stamped Flag (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Stamped Flag": false
      }));
    }
    if(option === 'Thumb Logo/Graphic' && value === 'Thumb Flag (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Thumb Flag": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Thumb Flag (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Thumb Flag": false
      }));
    }
    if(option === 'Thumb Logo/Graphic' && value === 'Custom Plate Number (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Custom Plate Number": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Custom Plate Number (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Custom Plate Number": false
      }));
    }
    if(option === 'Palm Stamp' && value === 'Custom Number') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Palm Custom Number": true
      }));
    } else if(option === 'Palm Stamp' && value !== 'Custom Number') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Palm Custom Number": false
      }));
    }
    if(option === 'Palm Stamp' && value === 'Graphic') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Palm Graphic": true
      }));
    } else if(option === 'Palm Stamp' && value !== 'Graphic') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Palm Graphic": false
      }));
    }

  }

  const handleBaseChange = (option, value) => {
    if (baseConfig[option] === value) {
      // If clicking on already selected option, set to null 
      value = null; 
    }
    setBaseConfig((prevOption) => ({
      ...prevOption,
      [option]: value,
    }));

    // Update baseSteps when logo_style changes
    if(option === 'logo_style' && value === 'Embroidered Flag') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,
        embroidered_flag: true
      }));
    } else if(option === 'logo_style' && value !== 'Embroidered Flag') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,  
        embroidered_flag: false
      }));
    }
    if(option === 'logo_style' && value === 'Embroidered') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,
        logo_outline: true
      }));
    } else if(option === 'logo_style' && value !== 'Embroidered') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,  
        logo_outline: false
      }));
    }
    if(option === 'logo_style' && value === "Circle Patch") {
      console.log("here")
      setColorSteps(prevSteps => ({
        ...prevSteps,
        wristPlate: true
      }));
    } else if(option === 'logo_style' && value !== "Circle Patch") {
      setColorSteps(prevSteps => ({
        ...prevSteps,  
        wristPlate: false
      }));
    }
    if(option === 'logo_style' && value === "Square Patch") {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Square Patch": true,
        "Square Patch Lines": true
      }));
    } else if(option === 'logo_style' && value !== "Square Patch") {
      setColorSteps(prevSteps => ({
        ...prevSteps,  
        "Square Patch": false,
        "Square Patch LInes": false
      }));
    }

    if(option === 'finger_option' && value !== 'None') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,
        finger_hood_or_pad_placement: true
      }));
    } else if(option === 'finger_option' && value === 'None') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,  
        finger_hood_or_pad_placement: false
      }));
    }

    if(option === 'Home Plate' && value === 'Home Plate') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Home Plate": true
      }));
    } else if(option === 'Home Plate' && value !== 'Home Plate') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Home Plate": false
      }));
    }

    if(option === 'logo_outline' && value === 'Enable Logo Outline') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        logo_outline_color: true
      }));
    } else if(option === 'logo_outline' && value === null) {
      setColorSteps(prevSteps => ({
        ...prevSteps,  
        logo_outline_color: false
      }));
    }

    if(option === 'finger_option' && value === 'Hood') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_hood: true
      }));
    } else if(option === 'finger_option' && value !== 'Hood') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_hood: false
      }));
    }

    if(option === 'finger_option' && value === 'Pad') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_pad: true
      }));
    } else if(option === 'finger_option' && value !== 'Pad') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_pad: false
      }));
    }

    if(option === 'inlay' && value === 'Inlay') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        inlay: true
      }));
    } else if(option === 'inlay' && value !== 'Inlay') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        inlay: false
      }));
    }

    if(option === "dual_welting" && value === "Dual Welting") {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Finger Strip": true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather2: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather3: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather4: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather5: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather6: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather7: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather8: false
      }));
    } else if(option === "dual_welting" && value !== "Dual Welting") {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Finger Strip": false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather2: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather3: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather4: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather5: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather6: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather7: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather8: true
      }));
    }

    if(option === 'web_style' && value === 'I-Web') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Web Plate": true
      }));
    } else if(option === 'web_style' && value !== 'I-Web') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Web Plate": false
      }));
    }


  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handlePreviousClick = (data, current, setCurrent, steps) => {
    const keys = Object.keys(data);
    
    let index = keys.indexOf(current);
    if(index === -1) return;
  
    let prevEnabled;
    
    do {
      index--;
      if(index < 0) index = keys.length - 1;
      
      prevEnabled = steps[keys[index]];
    }
    while(!prevEnabled && index !== keys.indexOf(current))
    
    setCurrent(keys[index]);
  }

  const handleNextClick = (data, current, setCurrent, steps) => {

    const keys = Object.keys(data);
    
    let index = keys.indexOf(current);
    if(index === -1) return;
  
    let nextEnabled;
    
    do {
      index++;
      if(index >= keys.length) index = 0;
  
      nextEnabled = steps[keys[index]];
    }
    while(!nextEnabled && index !== keys.indexOf(current));
  
    setCurrent(keys[index]);
  }

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
                        <CameraControl />
                        <scene >
                          <ambientLight intensity={0.3} color={'#ffffff'} />
                          <directionalLight 
                            intensity={0.25 * Math.PI} // convert direct intensity to radians
                            color={'#ffffff'}
                            // position={[0.5, 0, 0.866]} // 60 degrees
                            position={[0, 0, 0.866]} // 60 degrees
                          />
                          <directionalLight 
                            intensity={0.25 * Math.PI} // convert direct intensity to radians
                            color={'#ffffff'}
                            position={[0, 0, -0.866]} // 60 degrees
                          />

                          {/* <FielderGlove rot={rotationValue} base={baseConfig} colors={colors} textures={textures} personalize={personlizeConfig} personalizeConfig={personlizationConfig} xPosition={xPosition} yPosition={yPosition} zPosition={zPosition} xRotation={xRotation} yRotation={yRotation} zRotation={zRotation} flags={flags} /> */}
                          <FielderGlove rot={rotationValue} base={baseConfig} colors={colors} textures={textures} personalize={personlizeConfig} personalizeConfig={personlizationConfig} flags={flags} />
                          
                        </scene>
                        <OrbitControls
                          minPolarAngle={Math.PI / 2}
                          maxPolarAngle={Math.PI / 2}
                          enableZoom={true}
                          enablePan={false}
                        />
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
          <div className="md:col-span-5 xl:col-span-4">
            <div className="configurator-container">
              <div className="tab-buttons">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`tab-button ${
                      currentTab === tab ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {currentTab === tabs[0] && (
                <div className="Base">
                  <h3 className="tab-heading">Base Personalization</h3>
                  <div className="mesh-navigation">
                    <button
                      onClick={() => {handlePreviousClick(baseOptions, currentBase, setCurrentBase, baseSteps)}}
                      className="nav-button"
                      disabled={Object.keys(baseOptions).indexOf(currentBase) === 0}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {handleNextClick(baseOptions, currentBase, setCurrentBase, baseSteps)}}
                      className="nav-button"
                      disabled={Object.keys(baseOptions).indexOf(currentBase) ===  Object.keys(baseOptions).length - 1}
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="base-options">
                    <div className="mesh-label">
                      Current: {currentBase}
                    </div>
                    <div>
                      {(data[currentBase].options).map(option => (
                        <div> 
                          <input
                            type="radio"
                            id={`radio-${option}`}
                            className="radio-input"
                            value={option}
                            checked={baseConfig[currentBase] === option}
                            onClick={()=>{handleBaseChange(currentBase, option)}}
                            />
                          <label htmlFor={`radio-${option}`} className="radio-label">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {currentTab === tabs[1] && (
                <div className="Color">
                  <h3 className="tab-heading">Color Customization</h3>
                  <div className="mesh-navigation">
                    <button
                      onClick={() => {handlePreviousClick(colorData, currentMesh, setCurrentMesh, colorSteps)}}
                      className="nav-button"
                      disabled={Object.keys(colorData).indexOf(currentMesh) === 0}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {handleNextClick(colorData, currentMesh, setCurrentMesh, colorSteps)}}
                      className="nav-button"
                      disabled={
                        Object.keys(colorData).indexOf(currentMesh) ===  Object.keys(colorData).length - 1
                      }
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="mesh-label">
                    Current Mesh: {currentMesh}
                  </div>
                  <div className="color-options">
                    {Object.entries(meshOptions[currentMesh].colors).map(([label, color]) => (
                      <div class="color-option-wrapper">
                        <div
                          key={color}
                          className={`color-option ${
                            colors[currentMesh] === color ? "selected" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorChange(currentMesh, color)}
                        /> 
                        <div className="color-label">
                          {label} 
                        </div>
                      </div>
                    ))}
                    <br/>
                    {Object.entries(meshOptions[currentMesh].textures).map(([label, img]) => (
                      <div class="texture-option-wrapper">
                        <img
                          className={`texture-option ${
                            textures[currentMesh] === img ? "selected" : ""  
                          }`}
                          key={img}
                          src={img}
                          alt='texture'
                          onClick={() => handleTextureChange(currentMesh, img)}
                        />
                        <div className="texture-label">
                          {label}
                        </div>
                      </div>
                    ))}
                    
                    {meshOptions[currentMesh].exclusive_textures && (
                      <div className="exclusive-textures"> 
                      <div className="exclusive-label">Exclusive Textures</div>

                        {Object.entries(meshOptions[currentMesh].exclusive_textures).map(([label, img]) => (
                          <div class="texture-option-wrapper">
                            <img
                              className={`texture-option ${
                                textures[currentMesh] === img ? "selected" : ""  
                              }`}
                              key={img}
                              src={img}
                              alt='texture'
                              onClick={() => handleTextureChange(currentMesh, img)}
                            />
                            <div className="texture-label">
                              {label}
                            </div>
                          </div>
                        ))} 
                      </div> 
                    )}

                  </div>
                </div>
              )}
              {currentTab === tabs[2] && (
                <div className="Personalize">
                  <h3 className="tab-heading">Personalization</h3>
                  <div className="mesh-navigation">
                    <button
                      onClick={() => {handlePreviousClick(personlizeConfig, currentPersonlize, setCurrentPersonlize, personilzeSteps)}}
                      className="nav-button"
                      disabled={Object.keys(personlizeConfig).indexOf(currentPersonlize) === 0}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {handleNextClick(personlizeConfig, currentPersonlize, setCurrentPersonlize, personilzeSteps)}}
                      className="nav-button"
                      disabled={
                        Object.keys(personlizeConfig).indexOf(currentPersonlize) ===  Object.keys(personlizeConfig).length - 1
                      }
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="personlize-options">
                    <div className="mesh-label">
                      Current: {currentPersonlize}
                    </div>
                    <div className="personlize-options1">
                      {data[currentPersonlize].options && (
                        <>
                          {(data[currentPersonlize].options).map(option => (
                            <div> 
                              <input
                                type="radio"
                                id={`radio-${option}`}
                                className="radio-input"
                                value={option}
                                checked={personlizeConfig[currentPersonlize] === option}
                                onClick={()=>{handlePeronalizeChange(currentPersonlize, option)}}
                                />
                              <label htmlFor={`radio-${option}`} className="radio-label">
                                {option}
                              </label>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <div className = "textbox-container" >
                      {data[currentPersonlize].textbox && (
                        <>
                          {data[currentPersonlize].texttype === "number" && (
                            <input className = "rounded-full px-6 w-full focus:ring-0 border-gray-300 focus:border-gray-300" 
                              type="number" 
                              placeholder={currentPersonlize}
                              max="99"
                              min="0"
                              value= {personlizeConfig[currentPersonlize]}
                              onChange={handlePeronalizeChangeText}
                            />
                          )}
                          {data[currentPersonlize].texttype === "text" && (
                            <>
                              <input className = "rounded-full px-6 w-full focus:ring-0 border-gray-300 focus:border-gray-300" 
                                type="text" 
                                placeholder={currentPersonlize}
                                maxLength="17"
                                minLength="0"
                                value= {personlizeConfig[currentPersonlize + " Text"]}
                                onChange={handlePeronalizeChangeText}
                              />
                            </>
                          )}
                        <br/>
                        </>
                      )}
                    <br/>
                    {data[currentPersonlize].colors && (
                      <div className="color-options">
                        {Object.entries(data[currentPersonlize].colors).map(([label, color]) => (
                          <div class="color-option-wrapper">
                            <div
                              key={color}
                              className={`color-option ${
                                personlizeConfig[currentPersonlize + " Color"] === color ? "selected" : ""
                              }`}
                              style={{ backgroundColor: color }}
                              onClick={()=>{handlePeronalizeChangeColor(currentPersonlize, color)}}
                            /> 
                            <div className="color-label">
                              {label} 
                            </div>
                          </div>
                        ))}
                        <br/>
                      </div>
                    )}
                    {data[currentPersonlize].icons && (
                      <div className="color-options">
                        {Object.entries(data[currentPersonlize].icons).map(([label, color]) => (
                          <div class="color-option-wrapper">
                            <img
                              key={color}
                              className={`color-option ${
                                personlizeConfig[currentPersonlize] === label ? "selected" : ""
                              }`}
                              // style={{ backgroundColor: color }}
                              src = {color}
                              alt = {label}
                              onClick={()=>{handlePeronalizeChange(currentPersonlize, label)}}
                            /> 
                            <div className="color-label">
                              {label} 
                            </div>
                          </div>
                        ))}
                        <br/>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              )}
              {/* <Controls
                controls={{
                  xPosition,
                  yPosition,
                  zPosition,
                  xRotation,
                  yRotation,
                  zRotation,
                  setXPosition,
                  setYPosition,
                  setZPosition,
                  setXRotation,
                  setYRotation,
                  setZRotation,
                }}
              /> */}
            </div>
          </div>
        </div>
      </div> 

    </div>
  );
}
