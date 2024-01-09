import React from "react";
import { useState } from "react";
import ProductSlideshow from "./Slider";
import { meshOptions, colorData, colorPalette, tabs, textureData, colorStepsConfig, baseOptions, personlizationOptions, personlizationConfig, Options, baseStepsConfig } from "./constants";

export default function Main() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [isBarOpen, setIsBarOpen] = useState(false);
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

  const handleTabClick = (type) => {
    setCurrentTab(type);
  };

  const BarNavToggle = () => {
    setIsBarOpen((prevIsBarOpen) => !prevIsBarOpen);
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
    <main id="main">
      {/* Product Block */}
      <div className="product-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0">
              <div className="filter-area d-flex justify-content-between">
                {/* <div> */}
                <button
                  id="filters_opener"
                  type="button"
                  onClick={BarNavToggle}
                >
                  <img src={`/images/menu.svg`} alt="Ham" />
                </button>
                <button type="button" className="btn">
                  reset
                </button>
              </div>
              <div
                className={`hb-side-bar position-fixed  ${
                  isBarOpen ? "activate" : ""
                }`}
              >
                <button
                  className={`cross-hamb ${isBarOpen ? "activate" : ""}`}
                  onClick={BarNavToggle}
                >
                  <svg
                    className="fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
                  </svg>
                </button>
                <div className="hb-inner-sidebar">
                  <label
                    htmlFor="asign-search"
                    className="text-white mb-1 fw-bold"
                  >
                    Search Options
                  </label>
                  <form className="row align-items-center mx-0">
                    <div className="col-10">
                      <div className="asign-input">
                        <input
                          type="search form-control"
                          id="asign-search"
                          list="datalistOptions"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>
                    <div className="col-2 px-1 px-md-auto">
                      <div className="asign-src-icon text-end">
                        <button className="new class">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M20.0308 18.4693L15.3368 13.7762C16.6973 12.1428 17.3757 10.0478 17.2309 7.92691C17.0861 5.80604 16.1293 3.82265 14.5593 2.38932C12.9894 0.955989 10.9274 0.183083 8.80213 0.231383C6.67687 0.279683 4.65205 1.14547 3.14888 2.64864C1.64571 4.15181 0.779927 6.17663 0.731627 8.30188C0.683327 10.4271 1.45623 12.4892 2.88956 14.0591C4.32289 15.629 6.30629 16.5859 8.42715 16.7307C10.548 16.8755 12.6431 16.1971 14.2765 14.8365L18.9696 19.5306C19.0393 19.6003 19.122 19.6556 19.213 19.6933C19.3041 19.731 19.4017 19.7504 19.5002 19.7504C19.5988 19.7504 19.6963 19.731 19.7874 19.6933C19.8784 19.6556 19.9612 19.6003 20.0308 19.5306C20.1005 19.4609 20.1558 19.3782 20.1935 19.2871C20.2312 19.1961 20.2506 19.0985 20.2506 19C20.2506 18.9014 20.2312 18.8038 20.1935 18.7128C20.1558 18.6218 20.1005 18.539 20.0308 18.4693ZM2.25021 8.49997C2.25021 7.16495 2.64609 5.8599 3.38779 4.74987C4.12949 3.63984 5.1837 2.77467 6.4171 2.26378C7.6505 1.75289 9.0077 1.61922 10.3171 1.87967C11.6264 2.14012 12.8292 2.78299 13.7732 3.727C14.7172 4.671 15.3601 5.87374 15.6205 7.18311C15.881 8.49248 15.7473 9.84968 15.2364 11.0831C14.7255 12.3165 13.8603 13.3707 12.7503 14.1124C11.6403 14.8541 10.3352 15.25 9.00021 15.25C7.21061 15.248 5.49488 14.5362 4.22944 13.2708C2.964 12.0053 2.2522 10.2896 2.25021 8.49997Z"
                              fill="#5F5F67"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="heading">
                    <h2 className="text-white text-3xl">
                      base <span>2 step left</span>
                    </h2>
                  </div>
                  <div className="hb-side-nav">
                    <ul>
                      <li>
                        <button href="#">Size</button>
                        <span>1.1x</span>
                      </li>
                      <li>
                        <button href="#">Wrist Type</button>
                        <span>red</span>
                      </li>
                      <li>
                        <button href="#">color</button>
                        <span>pink</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* </div> */}
              <div className="product-variants mb-5">
                <ul
                  className="nav nav-pills mb-0 justify-content-between"
                  id="pills-tab"
                  role="tablist"
                >
                  {tabs.map((type) => (
                    <li key= {type} className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          currentTab === type ? "active" : ""
                        }`}
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        onClick={() => handleTabClick(type)}
                      >
                        {type}
                      </button>
                    </li>
                  ))}
                </ul>
                {currentTab === "Base" && (
                  <div className="Base">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <ul className="d-flex justify-content-around">
                        <li>2 remaining</li>
                        <li>19 remaining</li>
                        <li>1 remaining</li>
                      </ul>
                      <div className="variants-categories-block position-relative">
                        <div className="variants-categories d-flex justify-content-center">
                          <div className="variants-category active">
                            <span> {currentBase} </span>
                          </div>
                          <div className="variants-category">
                            <span>Logo Style</span> 
                          </div>
                          <div className="variants-category">
                            <span>Logo Outline</span> 
                          </div>
                          <div className="variants-category">
                            <span>Finger Option</span> 
                          </div>
                        </div>
                        <button className="vc-arrows vc-left" onClick={() => {handlePreviousClick(baseOptions, currentBase, setCurrentBase, baseSteps)}} disabled={Object.keys(baseOptions).indexOf(currentBase) === 0} />
                        <button className="vc-arrows vc-right" onClick={() => {handleNextClick(baseOptions, currentBase, setCurrentBase, baseSteps)}} disabled={Object.keys(baseOptions).indexOf(currentBase) ===  Object.keys(baseOptions).length - 1} />
                      </div>
                      <div className="data-card">
                        <div className="data-head d-flex justify-content-between">
                          <h2 className="title">{currentBase}:</h2>
                          <a
                            href="/"
                            className="product-guid d-flex align-items-center"
                          >
                            <img
                              className="me-1"
                              src={`/images/help.svg`}
                              alt="Help"
                            />
                            help
                          </a>
                        </div>
                        <div className="options-area ">
                          <form action="#" method className="d-flex flex-wrap">
                            <div className="row">
                              {(data[currentBase].options).map(option => (
                                <div className="col-md-4">
                                  <label className="hb-label-cust">
                                    {option}
                                    <input
                                      type="radio"
                                      id={`radio-${option}`}
                                      defaultChecked="checked"
                                      name="option-radio"
                                      checked={baseConfig[currentBase] === option}
                                      onClick={()=>{handleBaseChange(currentBase, option)}}
                                    />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                                ))}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTab === "Color" && (
                  <div className="Base">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <ul className="d-flex justify-content-around">
                        <li>2 remaining</li>
                        <li>19 remaining</li>
                        <li>1 remaining</li>
                      </ul>
                      <div className="variants-categories-block position-relative">
                        <div className="variants-categories d-flex justify-content-center">
                          <div className="variants-category active">
                            <span> {currentMesh} </span>
                          </div>
                          <div className="variants-category">
                            <span>Home Plate</span> 
                          </div>
                          <div className="variants-category">
                            <span>Laces</span> 
                          </div>
                          <div className="variants-category">
                            <span>Leather 1</span> 
                          </div>
                        </div>
                        <button className="vc-arrows vc-left" onClick={() => {handlePreviousClick(colorData, currentMesh, setCurrentMesh, colorSteps)}} disabled={Object.keys(colorData).indexOf(currentMesh) === 0} />
                        <button className="vc-arrows vc-right" onClick={() => {handleNextClick(colorData, currentMesh, setCurrentMesh, colorSteps)}} disabled={Object.keys(colorData).indexOf(currentMesh) ===  Object.keys(colorData).length - 1} />
                      </div>
                      <div className="data-card">
                        <div className="data-head d-flex justify-content-between">
                          <h2 className="title">{currentMesh}:</h2>
                          <a
                            href="/"
                            className="product-guid d-flex align-items-center"
                          >
                            <img
                              className="me-1"
                              src={`/images/help.svg`}
                              alt="Help"
                            />
                            help
                          </a>
                        </div>
                        <div className="options-area ">
                          <form action="#" method className="d-flex flex-wrap">
                            <div className="row">
                              {Object.entries(meshOptions[currentMesh].colors).map(([label, color]) => (
                                <div className="col-md-4">
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
                                <div className="col-md-4">
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
                                    <div class="col-md-4">
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
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTab === "Personalize" && (
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    personalise Tab content
                  </div>
                )}

                <div
                  className="tab-content position-relative"
                  id="pills-tabContent"
                >

                </div>
              </div>
              <div className="add-cart-box">
                <button href="#" className="btn btn-secondry">
                  add to cart $199
                </button>
                <p className="m-0">
                  To add to cart, please answer the required steps in the Base,
                  Colors, and Personalize sections.
                </p>
              </div>
            </div>

            <ProductSlideshow baseConfig={baseConfig} colors={colors} textures={textures} personlizeConfig={personlizeConfig} personlizationConfig={personlizationConfig}/>
          </div>
        </div>
      </div>
    </main>
  );
}
