import React, { useEffect, useMemo, useState } from "react";
import ProductSlideshow from "./FielderSlider";
import { meshOptions, baseReq, colorReq, personlizationReq, colorData, colorPalette, allColors, texturePalette, tabs, textureData, colorStepsConfig, baseOptions, personlizationOptions, personlizationConfig, Options, baseStepsConfig } from "../constants";
// import Controls from "../controls"

function usePricing(baseConfig, personalizeConfig) {

  const [price, setPrice] = useState(199);

  
  useEffect(() => {
    const priceAffectingOptions = {
      logoStyle: baseConfig.logo_style,  
      inlay: baseConfig.inlay,  
      kippalm: baseConfig["Kip Palm Liner"],
      thumb: personalizeConfig["Thumb Logo/Graphic"]
    }

    let newPrice = 199;
    
    if(priceAffectingOptions.logoStyle === "Embroidered Flag (+$7)") {
       newPrice += 7; 
    }
    if(priceAffectingOptions.inlay === "Inlay (+$15)") {
       newPrice += 15; 
    }
    if(priceAffectingOptions.kippalm === "Kip Palm Liner (+$15)") {
       newPrice += 15; 
    }
    if(priceAffectingOptions.thumb === "Graphic (+$7)") {
       newPrice += 7; 
    }
    if(priceAffectingOptions.thumb === "Premium Graphic (+$15)") {
       newPrice += 15; 
    }
    if(priceAffectingOptions.thumb === "Jumbo Number (+$7)") {
       newPrice += 7; 
    }
    if(priceAffectingOptions.thumb === "Stamped Flag (+$7)") {
       newPrice += 7; 
    }
    if(priceAffectingOptions.thumb === "Thumb Flag (+$7)") {
       newPrice += 7; 
    }
    if(priceAffectingOptions.thumb === "Custom Plate Number (+$7)") {
       newPrice += 7; 
    }

    setPrice(newPrice);

  }, [baseConfig.logo_style, baseConfig.inlay, baseConfig.kippalm, baseConfig, personalizeConfig])

  return { price }; // return price for usage

}

export default function Main() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentMesh, setCurrentMesh] = useState("binding");
  const [colors, setColors] = useState(colorData);
  const [textures, setTextures] = useState(textureData);
  const [colorSteps, setColorSteps] = useState(colorStepsConfig);
  const [colorRequired, setColorRequired] = useState(colorReq);
  const [currentBase, setCurrentBase] = useState("size");
  const [baseConfig, setBaseConfig] = useState(baseOptions);
  const [baseSteps, setBaseSteps] = useState(baseStepsConfig);
  const [baseRequired, setBaseRequired] = useState(baseReq);
  const [personilzeSteps, setPersonalizeSteps] = useState(personlizationConfig);
  const [personlizeConfig, setPersonlizeConfig] = useState(personlizationOptions);
  const [personalizedRequired, setPersonalizedRequired] = useState(personlizationReq);
  const [currentPersonlize, setCurrentPersonlize] = useState("Thumb Logo/Graphic");
  const [data, setData] = useState(Options)
  const [screenshots, setScreenshots] = useState([]);
  const {price} = usePricing(baseConfig, personlizeConfig);  

  const baseEnabled = useMemo(() => {
    return Object.fromEntries(
      Object.entries(baseConfig)
        .filter(([key]) => baseSteps[key])
    );
  }, [baseConfig, baseSteps]) 

  const colorEnabled = useMemo(() => {
    return Object.fromEntries(
      Object.entries(colors)
        .filter(([key]) => colorSteps[key])
    );
  }, [colors, colorSteps]) 

  const personalizeEnabled = useMemo(() => {
    return Object.fromEntries(
      Object.entries(personlizeConfig)
        .filter(([key]) => personilzeSteps[key])
    );
  }, [personlizeConfig, personilzeSteps]) 
  
  // const [xPosition, setXPosition] = useState(9.25);
  // const [yPosition, setYPosition] = useState(0.039);
  // const [zPosition, setZPosition] = useState(0.023);
  // const [xRotation, setXRotation] = useState(2.915);
  // const [yRotation, setYRotation] = useState(1.132);
  // const [zRotation, setZRotation] = useState(-0.6625);
  
  useEffect(() =>{
    if (personlizeConfig["Thumb Text"] === "Thumb Text" && personlizeConfig["Thumb Text Text"] !== ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Thumb Text": false
      }));
    }
    if (personlizeConfig["Thumb Text"] === "Thumb Text" && personlizeConfig["Thumb Text Text"] === ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Thumb Text": true
      }));
    }
    if (personlizeConfig["Pinky Text"] === "Pinky Text" && personlizeConfig["Pinky Text Text"] !== ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Pinky Text": false
      }));
    }
    if (personlizeConfig["Pinky Text"] === "Pinky Text" && personlizeConfig["Pinky Text Text"] === ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Pinky Text": true
      }));
    }
    if (personlizeConfig["Palm Text"] === "Palm Text" && personlizeConfig["Palm Text Text"] !== ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Palm Text": false
      }));
    }
    if (personlizeConfig["Palm Text"] === "Palm Text" && personlizeConfig["Palm Text Text"] === ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Palm Text": true
      }));
    }
    if (personlizeConfig["Thumb Logo/Graphic"] === "Jumbo Number (+$7)" && personlizeConfig["Jumbo Number"] !== ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Jumbo Number": false
      }));
    }
    if (personlizeConfig["Thumb Logo/Graphic"] === "Jumbo Number (+$7)" && personlizeConfig["Jumbo Number"] === ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Jumbo Number": true
      }));
    }
    if (personlizeConfig["Thumb Logo/Graphic"] === "Custom Plate Number (+$7)" && personlizeConfig["Custom Plate Number"] !== ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Custom Plate Number": false
      }));
    }
    if (personlizeConfig["Thumb Logo/Graphic"] === "Custom Plate Number (+$7)" && personlizeConfig["Custom Plate Number"] === ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Custom Plate Number": true
      }));
    }
    if (personlizeConfig["Palm Stamp"] === "Custom Number" && personlizeConfig["Palm Custom Number"] !== ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Palm Custom Number": false
      }));
    }
    if (personlizeConfig["Palm Stamp"] === "Custom Number" && personlizeConfig["Palm Custom Number"] === ""){
      setPersonalizedRequired(prevState => ({
        ...prevState,  
        "Palm Custom Number": true
      }));
    }
  },[personlizeConfig])

  const handleTabClick = (type) => {
    setCurrentTab(type);
  }

  const format_Text = (text) => {
    return text
          .replace(/_/g, ' ')
          .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase())
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .replace(/(\d)/g, ' $1');
  }

  const BarNavToggle = () => {
    setIsBarOpen((prevIsBarOpen) => !prevIsBarOpen);
  }

  const filterData = (data) => {
    if (!searchText) return Object.fromEntries(data);
    const filteredData = Object.fromEntries(
      data.filter(([key, value]) =>
        key.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    return filteredData;
  } 
  
  const handleNavBase = (key) => {
    setCurrentTab(tabs[0])
    setCurrentBase(key)
    setIsBarOpen((prevIsBarOpen) => !prevIsBarOpen);
  }
  
  const handleNavColor = (key) => {
    setCurrentTab(tabs[1])
    setCurrentMesh(key)
    setIsBarOpen((prevIsBarOpen) => !prevIsBarOpen);
  }

  const handleNavPersonalization = (key) => {
    setCurrentTab(tabs[2])
    setCurrentPersonlize(key)
    setIsBarOpen((prevIsBarOpen) => !prevIsBarOpen);
  }

  const handleColorChange = (meshName, newColor) => {
    setTextures((prevData) => ({
      ...prevData,
      [meshName]: null,
    }));
    setColors((prevColors) => ({
      ...prevColors,
      [meshName]: newColor,
    }));
    setColorRequired(prevSteps => ({
      ...prevSteps,
      [meshName]: false
    }));
  }

  const handleTextureChange = (meshName, img) => {
    setColors((prevColors) => ({
      ...prevColors,
      [meshName]: colorData[meshName],
    }));
    setTextures((prevData) => ({
      ...prevData,
      [meshName]: img,
    }));
    setColorRequired(prevSteps => ({
      ...prevSteps,
      [meshName]: false
    }));
  }

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
          colors: value === "Thumb Text" ? allColors : null
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
          colors: value === "Pinky Text" ? allColors : null
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
          colors: value === "Palm Text" ? allColors : null
        } 
      }))  
    }
    

    if (option === 'Thumb Logo/Graphic' && value === null){
      value = 'Circle Logo'; 
    }

    setPersonlizeConfig((prevOption) => ({
      ...prevOption,
      [option]: value,
    }));

    if(option === 'Thumb Logo/Graphic' && value === 'Circle Logo') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Circle Logo": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Circle Logo') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Circle Logo": false
      }));
    }
    if(option === 'Thumb Logo/Graphic' && value === 'Custom Plate Number (+$7)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Circle Logo": true
      }));
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Custom Plate Number": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Custom Plate Number (+$7)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Circle Logo": false
      }));
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Custom Plate Number": false
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
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Jumbo Number": true
      }));
    } else if(option === 'Thumb Logo/Graphic' && value !== 'Jumbo Number (+$7)') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Jumbo Number": false
      }));
      setPersonalizedRequired(prevSteps => ({
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
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Palm Custom Number": true
      }));
    } else if(option === 'Palm Stamp' && value !== 'Custom Number') {
      setPersonalizeSteps(prevSteps => ({
        ...prevSteps,
       "Palm Custom Number": false
      }));
      setPersonalizedRequired(prevSteps => ({
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
    if (option === 'Thumb Text' && value === null){
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Thumb Text": false
      }));
    }
    else if (option === 'Thumb Text' && value === "Thumb Text"){
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Thumb Text": true
      }));
    }
    if (option === 'Pinky Text' && value === null){
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Pinky Text": false
      }));
    }
    else if (option === 'Pinky Text' && value === "Pinky Text"){
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Pinky Text": true
      }));
    }
    if (option === 'Palm Text' && value === null){
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Palm Text": false
      }));
    }
    else if (option === 'Palm Text' && value === "Palm Text"){
      setPersonalizedRequired(prevSteps => ({
        ...prevSteps,
        "Palm Text": true
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
    if(option === 'logo_style' && value === 'Embroidered Flag (+$7)') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,
        embroidered_flag: true
      }));
      setBaseSteps((prevSteps) => ({
        ...prevSteps,
        embroidered_flag: {
          ...prevSteps.embroidered_flag,
          value: true,
        },
      }));
    } else if(option === 'logo_style' && value !== 'Embroidered Flag (+$7)') {
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

    if(option === 'Circle Logo' && value === 'Circle Logo') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Circle Logo": true
      }));
    } else if(option === 'Circle Logo' && value !== 'Circle Logo') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Circle Logo": false
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

    if(option === 'inlay' && value === 'Inlay (+$15)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        inlay: true
      }));
    } else if(option === 'inlay' && value !== 'Inlay (+$15)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        inlay: false
      }));
    }
    if(option === 'Kip Palm Liner' && value === 'Kip Palm Liner (+$15)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Kip Palm Liner": true
      }));
    } else if(option === 'Kip Palm Liner' && value !== 'Kip Palm Liner (+$15)') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Kip Palm Liner": false
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

    if(option === 'glove_stiffness' && value !== null) {
      setBaseRequired(prevSteps => ({
        ...prevSteps,
        "glove_stiffness": false
      }));
    } else if(option === 'glove_stiffness' && value === null) {
      setBaseRequired(prevSteps => ({
        ...prevSteps,
        "glove_stiffness": true
      }));
    }
    if(option === 'throwing_hand' && value !== null) {
      setBaseRequired(prevSteps => ({
        ...prevSteps,
        "throwing_hand": false
      }));
    } else if(option === 'throwing_hand' && value === null) {
      setBaseRequired(prevSteps => ({
        ...prevSteps,
        "throwing_hand": true
      }));
    }
  }

  const resetConfig = () => {
    setBaseConfig(baseOptions);
    setBaseSteps(baseStepsConfig)
    setColors(colorData);
    setColorSteps(colorStepsConfig);
    setTextures(textureData);
    setPersonalizeSteps(personlizationConfig)
    setPersonlizeConfig(personlizationOptions)
    setData(Options)
    setBaseRequired(baseReq)
    setColorRequired(colorReq)
    setPersonalizedRequired(personlizationReq)
  }

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

  const captureScreenshot = () => {
    const canvasElements = document.getElementsByTagName('canvas');
    const compositeCanvas = document.createElement('canvas');
    const compositeContext = compositeCanvas.getContext('2d');
  
    // Set the size of the composite canvas
    compositeCanvas.width = 1000; // 2 * 500 (width of each individual side)
    compositeCanvas.height = 1000; // 2 * 500 (height of each individual side)
  
    // Iterate through each canvas and draw it onto the composite canvas
    for (let i = 0; i < canvasElements.length; i++) {
      const sideCanvas = document.createElement('canvas');
      sideCanvas.width = 500;
      sideCanvas.height = 500;
      const sideContext = sideCanvas.getContext('2d');
  
      // Fill the individual side canvas with white background
      sideContext.fillStyle = '#ffffff'; // White color
      sideContext.fillRect(0, 0, sideCanvas.width, sideCanvas.height);
  
      // Draw the content of the original canvas onto the individual side canvas
      sideContext.drawImage(canvasElements[i], 0, 0, 500, 500);
  
      // Draw the individual side canvas onto the composite canvas
      compositeContext.drawImage(sideCanvas, i % 2 * 500, Math.floor(i / 2) * 500);
    }
  
    // Convert the composite canvas to data URL
    const screenshot = compositeCanvas.toDataURL();
    setScreenshots([...screenshots, screenshot]);

    return screenshot
  };

  const getFormData = () => {
    const enabledBaseOptions = Object.fromEntries(
      Object.entries(baseConfig)
        .filter(([key]) => baseSteps[key])
        .map(([key, value]) => [format_Text(key), value === null ? "No" : value])
    );
    
    const enabledColorOptions = Object.fromEntries(
      Object.entries(colors)
        .filter(([key]) => colorSteps[key])
        .map(([key, colorCode]) => {
          const colorName = Object.entries(colorPalette)
            .find(([name, code]) => code === colorCode)?.[0];
          const textureName =  Object.entries(texturePalette)
            .find(([name, code]) => code === textures[key])?.[0];
    
          return [
            textureName ? `${format_Text(key)} Texture` : `${format_Text(key)} Color`, textureName ? textureName : colorName,
          ];
        })
    );

    const enabledPersonalizationOptions = Object.fromEntries(
      Object.entries(personlizeConfig)
        .filter(([key]) => personilzeSteps[key])
        .flatMap(([key, value]) => {
          if (key === "Thumb Logo/Graphic" && value === "Jumbo Number (+$7)") {
            const newKey = value.split(' ')[0] + " " + value.split(' ')[1]
            const colorCode = personlizeConfig[`${newKey} Color`]
            const colorName = Object.entries(colorPalette).find(([name, code]) => code === colorCode)?.[0]
            return [
              [key, value],
              [`${newKey} Color`, colorName || "Default Black"]
            ];
          } else if (key === "Thumb Logo/Graphic" && value === "Custom Plate Number (+$7)") {
            const newKey = value.split(' ')[0] + " " + value.split(' ')[1] + " " + value.split(' ')[2]
            const colorCode = personlizeConfig[`${newKey} Color`]
            const colorName = Object.entries(colorPalette).find(([name, code]) => code === colorCode)?.[0]
            return [
              [key, value],
              [`${newKey} Color`, colorName || "Default Black"]
            ];
          } else if (key === value) {
            const colorCode = personlizeConfig[`${key} Color`]
            const colorName = Object.entries(colorPalette).find(([name, code]) => code === colorCode)?.[0]
            return [
              [key, personlizeConfig[`${key} Text`] || "None"],
              [`${key} Color`, colorName || "Default Black"]
            ];
          } else {
            return [[key, value === null ? "No" : value]];
          }
        })
    );

    const screenshot = captureScreenshot();

    return {
      "Glove Model": "Pro 44",
      "Glove Sport": "Baseball",
      "Price": price,
      ...enabledBaseOptions,
      ...enabledColorOptions,
      ...enabledPersonalizationOptions,
      "Screenshot": screenshot,
    };
  }

  const HandleCheckout = async () => {
    if (baseLeft + personalizeLeft + colorLeft > 0) {
      return;
    }
    // Create a form element
    const form = document.createElement('form');
    
    // Set the action to the cart url
    form.action = 'https://legendsportspro.com/cart';
    
    // Set the method to post 
    form.method = 'POST';
    
    // Call the getFormData function to get the data
    const formData = getFormData();
    
    // Loop through and add each data as inputs
    for (const key in formData) {
      const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = formData[key];
    form.appendChild(input);  
  }

    // Add the form to body
    document.body.appendChild(form);

    // Submit the form
    form.submit(); 
  }
  
  const filteredBaseConfig = filterData(Object.entries(baseConfig)); 
  const filteredColorConfig = filterData(Object.entries(colors)); 
  const filteredPersonalizeConfig = filterData(Object.entries(personlizeConfig)); 
  const baseLeft = Object.values(baseRequired).filter((value, index) => baseSteps[Object.keys(baseRequired)[index]] && value).length;
  const colorLeft = Object.values(colorRequired).filter((value, index) => colorSteps[Object.keys(colorRequired)[index]] && value).length;
  const personalizeLeft = Object.values(personalizedRequired).filter((value, index) => personilzeSteps[Object.keys(personalizedRequired)[index]] && value).length;

  return (
    <main id="main">
      {/* Product Block */}
      <div className="product-block">
        <div className="container">
          <div className="row mw-md-100">
            <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0">
              <div className="filter-area d-flex justify-content-between">
                {/* <div> */}
                <button
                  id="filters_opener"
                  type="button"
                  onClick={BarNavToggle}
                >
                  <img src={`/wp-content/reactpress/apps/fielderyouth/build/images/menu.svg`} alt="Ham" />
                </button>
                <button type="button" className="btn" onClick={resetConfig}>
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
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)} 
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
                      base {baseLeft ? <span>{baseLeft} step left</span> : ""}
                    </h2>
                  </div>
                  <div className="hb-side-nav">
                    <ul>
                      {Object.entries(filteredBaseConfig)
                        .filter(([key]) => baseSteps[key])
                        .map(([key, value]) => (  
                          <li key={key}>
                            <button onClick={() => {handleNavBase(key)}}>{format_Text(key)} </button>
                            <span className="ps-2 d-inline" style={{color: "red"}}>{baseRequired[key] ? "*" : ""}</span>
                            <span>{value === null ? "No" : value}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="heading">
                    <h2 className="text-white text-3xl">
                      color {colorLeft ? <span>{colorLeft} step left</span> : ""}
                    </h2>
                  </div>
                  <div className="hb-side-nav">
                    <ul>
                      {Object.entries(filteredColorConfig)
                        .filter(([key]) => colorSteps[key])
                        .map(([key, colorCode]) => {
                          const colorName = Object.entries(colorPalette)
                            .find(([name, code]) => code === colorCode)?.[0];
                          const textureName =  Object.entries(texturePalette)
                            .find(([name, code]) => code === textures[key])?.[0];
                          return (
                            <li key={key}>
                              <button onClick={() => {handleNavColor(key)}}>{format_Text(key)}</button>
                              <span className="d-inline ps-2" style={{color: "red"}}>{colorRequired[key] ? "*" : ""}</span>
                              {textures[key] ? (
                                <span>{textureName}</span>
                              ) : (
                                <>
                                  <span 
                                  style={{
                                    backgroundColor: colorCode,
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '3px'
                                  }}
                                  />
                                  <span>{colorName}</span> 
                                </>
                              )} 
                            </li>
                          )
                      })}
                    </ul>
                  </div>
                  <div className="heading">
                    <h2 className="text-white text-3xl">
                      Personalize {personalizeLeft ? <span>{personalizeLeft} step left</span> : ""}
                    </h2>
                  </div>
                  <div className="hb-side-nav">
                    <ul className="hb-padding-100">
                      {Object.entries(filteredPersonalizeConfig)
                        .filter(([key]) => personilzeSteps[key])
                        .map(([key, value]) => (  
                          <li key={key}>
                            <button onClick={() => {handleNavPersonalization(key)}}>{key}</button>
                            <span className="d-inline ps-1" style={{color: "red"}}>{personalizedRequired[key] ? "*" : ""}</span>
                            <span>{value === null ? "No" : value}</span>
                          </li>
                        ))}
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
                      <ul className="d-flex hb-remain-ul">
                        {baseLeft > 0 ? <li><span>{baseLeft} remaining</span></li> : <li></li>}
                        {colorLeft > 0 ? <li><span>{colorLeft} remaining</span></li> : <li></li>}
                        {personalizeLeft > 0 ? <li><span>{personalizeLeft} remaining</span></li> : <li></li>}
                      </ul>
                      <div className="variants-categories-block position-relative">
                      <div className="variants-categories d-flex justify-content-center">
                        <div className="variants-category active">
                          <span>{format_Text(currentBase)}</span> 
                        </div>
                        {Object.keys(baseEnabled)
                        .slice(Object.keys(baseEnabled).indexOf(currentBase) + 1, 
                                Object.keys(baseEnabled).indexOf(currentBase) + 4)
                        .map(step => (
                            <div key={step} className="variants-category" onClick={()=>{setCurrentBase(step)}}>
                              <span>{format_Text(step)}</span>
                            </div>  
                          ))}
                      </div>
                        <button className="vc-arrows vc-left" onClick={() => {handlePreviousClick(baseOptions, currentBase, setCurrentBase, baseSteps)}} disabled={Object.keys(baseOptions).indexOf(currentBase) === 0} />
                        <button className="vc-arrows vc-right" onClick={() => {handleNextClick(baseOptions, currentBase, setCurrentBase, baseSteps)}} disabled={Object.keys(baseOptions).indexOf(currentBase) ===  Object.keys(baseOptions).length - 1} />
                      </div>
                      <div className="data-card">
                        <div className="data-head d-flex justify-content-between">
                          <h2 className="title">{format_Text(currentBase)}:</h2>
                          <a
                            href="/"
                            className="product-guid d-flex align-items-center"
                          >
                            <img
                              className="me-1"
                              src={`/wp-content/reactpress/apps/fielderyouth/build/images/help.svg`}
                              alt="Help"
                            />
                            help
                          </a>
                        </div>
                        <div className="options-area ">
                          <form action="#" method="" className="overflow-hidden">
                            <div className="row p-3">
                            {data[currentBase].icons && (
                                <>
                                  {Object.entries(data[currentBase].icons).map(([label, img]) => (
                                    <div className="col-md-4 hb-col-4">
                                     <div key={label} className="hb-image-box">
                                      <img
                                        className={`texture-option1 ${
                                          baseConfig[currentBase] === label ? "selected" : ""
                                        }`}
                                        key={img}
                                        src={img}
                                        alt={label}
                                        onClick={()=>{handleBaseChange(currentBase, label)}}
                                      />
                                      </div>
                                      <div className="texture-label">
                                        {label}
                                      </div>
                                    </div>
                                  ))}
                                  <br/>
                                </>
                              )}
                              {(data[currentBase].options).map(option => (
                                <div key={option} className="hb-label-styl">
                                  <label className={`hb-label-cust ${baseConfig[currentBase] === option ? `active` : ``}`}>
                                    {option}
                                    <input
                                      type="radio"
                                      id={`radio-${option}`}
                                      name="option-radio"
                                      checked={baseConfig[currentBase] === option}
                                      onChange={() => handleBaseChange(currentBase, option)} 
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
                      <ul className="d-flex hb-remain-ul">
                         {baseLeft > 0 ? <li><span>{baseLeft} remaining</span></li> : <li></li>}
                        {colorLeft > 0 ? <li><span>{colorLeft} remaining</span></li> : <li></li>}
                        {personalizeLeft > 0 ? <li><span>{personalizeLeft} remaining</span></li> : <li></li>}
                      </ul>
                      <div className="variants-categories-block position-relative">
                        <div className="variants-categories d-flex justify-content-center">
                          <div className="variants-category active">
                            <span>{format_Text(currentMesh)}</span> 
                          </div>
                          {Object.keys(colorEnabled)
                          .slice(Object.keys(colorEnabled).indexOf(currentMesh) + 1, 
                                  Object.keys(colorEnabled).indexOf(currentMesh) + 4)
                          .map(step => (
                              <div key={step} className="variants-category" onClick={()=>{setCurrentMesh(step)}}>
                                <span>{format_Text(step)}</span>
                              </div>  
                            ))}
                        </div>
                        <button className="vc-arrows vc-left" onClick={() => {handlePreviousClick(colorData, currentMesh, setCurrentMesh, colorSteps)}} disabled={Object.keys(colorData).indexOf(currentMesh) === 0} />
                        <button className="vc-arrows vc-right" onClick={() => {handleNextClick(colorData, currentMesh, setCurrentMesh, colorSteps)}} disabled={Object.keys(colorData).indexOf(currentMesh) ===  Object.keys(colorData).length - 1} />
                      </div>
                      <div className="data-card">
                        <div className="data-head d-flex justify-content-between">
                          <h2 className="title">{format_Text(currentMesh)}:</h2>
                          <a
                            href="/"
                            className="product-guid d-flex align-items-center"
                          >
                            <img
                              className="me-1"
                              src={`/wp-content/reactpress/apps/fielderyouth/build/images/help.svg`}
                              alt="Help"
                            />
                            help
                          </a>
                        </div>
                        <div className="options-area ">
                          <form action="#" method="" className="overflow-hidden">
                            <div className="row p-3">
                              {Object.entries(meshOptions[currentMesh].colors).map(([label, color]) => (
                                <div key={label} className="hb-col-md-2 ">
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
                                <div className="hb-col-md-2">
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
                                    <div className="hb-col-md-2">
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
                  <div className="Base">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <ul className="d-flex hb-remain-ul">
                         {baseLeft > 0 ? <li><span>{baseLeft} remaining</span></li> : <li></li>}
                        {colorLeft > 0 ? <li><span>{colorLeft} remaining</span></li> : <li></li>}
                        {personalizeLeft > 0 ? <li><span>{personalizeLeft} remaining</span></li> : <li></li>}
                      </ul>
                      <div className="variants-categories-block position-relative">
                        <div className="variants-categories d-flex justify-content-center">
                          <div className="variants-category active">
                            <span>{currentPersonlize}</span> 
                          </div>
                          {Object.keys(personalizeEnabled)
                          .slice(Object.keys(personalizeEnabled).indexOf(currentPersonlize) + 1, 
                                  Object.keys(personalizeEnabled).indexOf(currentPersonlize) + 4)
                          .map(step => (
                              <div key={step} className="variants-category" onClick={()=>{setCurrentPersonlize(step)}}>
                                <span>{step}</span>
                              </div>  
                            ))}
                        </div>
                        <button className="vc-arrows vc-left" onClick={() => {handlePreviousClick(personlizeConfig, currentPersonlize, setCurrentPersonlize, personilzeSteps)}} disabled={Object.keys(personlizeConfig).indexOf(currentPersonlize) === 0} />
                        <button className="vc-arrows vc-right" onClick={() => {handleNextClick(personlizeConfig, currentPersonlize, setCurrentPersonlize, personilzeSteps)}} disabled={Object.keys(personlizeConfig).indexOf(currentPersonlize) ===  Object.keys(personlizeConfig).length - 1} />
                      </div>
                      <div className="data-card">
                        <div className="data-head d-flex justify-content-between">
                          <h2 className="title">{currentPersonlize}:</h2>
                          <a
                            href="/"
                            className="product-guid d-flex align-items-center"
                          >
                            <img
                              className="me-1"
                              src={`/wp-content/reactpress/apps/fielderyouth/build/images/help.svg`}
                              alt="Help"
                            />
                            help
                          </a>
                        </div>
                        <div className="options-area ">
                          <form action="#" method="" className="overflow-hidden">
                            <div className="row p-3">
                              {data[currentPersonlize].options && (
                                <>
                                  {(data[currentPersonlize].options).map(option => (
                                    <div className="hb-label-styl">
                                        <label className={`hb-label-cust ${personlizeConfig[currentPersonlize] === option ? `active` : ``}`}>
                                          {option}
                                          <input
                                            type="radio"
                                            id={`radio-${option}`}
                                            defaultChecked="checked"
                                            name="option-radio"
                                            checked={personlizeConfig[currentPersonlize] === option}
                                            onClick={()=>{handlePeronalizeChange(currentPersonlize, option)}}
                                          />
                                          <span className="checkmark" />
                                      </label>
                                    </div>
                                  ))}
                                </>
                              )}
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
                                      <input className = "rounded-full px-6 w-full focus:ring-0 border-gray-300 focus:border-gray-300 my-3" 
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
                                <>
                                  {Object.entries(data[currentPersonlize].colors).map(([label, color]) => (
                                    <div className="hb-col-md-2">
                                      <div
                                        key={color}
                                        className={`color-option ${
                                          personlizeConfig[currentPersonlize + " Color"] === color ? "selected" : ""
                                        }`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => {handlePeronalizeChangeColor(currentPersonlize, color)}}
                                      /> 
                                      <div className="color-label">
                                        {label} 
                                      </div>
                                  </div>
                                  ))}
                                  <br/>
                                </>
                              )}
                              {data[currentPersonlize].icons && (
                                <>
                                  {Object.entries(data[currentPersonlize].icons).map(([label, img]) => (
                                    <div className="col-md-4 hb-col-4">
                                    <div className="hb-image-box">
                                      <img
                                        className={`texture-option2 ${
                                          personlizeConfig[currentPersonlize] === label ? "selected" : ""
                                        }`}
                                        key={img}
                                        src={img}
                                        alt={label}
                                        onClick={()=>{handlePeronalizeChange(currentPersonlize, label)}}
                                      />
                                      </div>
                                      <div className="texture-label">
                                        {label}
                                      </div>
                                    </div>
                                  ))}
                                  <br/>
                                </>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  className="tab-content position-relative"
                  id="pills-tabContent"
                >

                </div>
              </div>
              <div className="add-cart-box">
                <button href="#" className="hb-btn btn-secondry" onClick={HandleCheckout} disabled={(baseLeft + colorLeft + personalizeLeft) > 0}>
                {/* <button href="#" className="hb-btn btn-secondry" onClick={HandleCheckout}> */}
                  add to cart ${usePricing && price}
                </button>
                {(baseLeft + colorLeft + personalizeLeft) > 0 && (
                  <p className="m-0">
                  To add to cart, please answer the required steps in the Base,
                  Colors, and Personalize sections.
                  </p>
                )}
              </div>
            </div>
            
            <ProductSlideshow baseConfig={baseConfig} colors={colors} textures={textures} personlizeConfig={personlizeConfig} personlizationConfig={personlizationConfig} />
          </div>
          {/* <button onClick={captureScreenshot}>Capture Screenshot</button> */}
        </div>
      </div>
    </main>
  );
}
