import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from "./components/pages/product";
import Fielder from "./components/customizer/Fielder";
import Main from "./components/Main"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/fielder" element={<Main />} />
        {/* <Route path="/firstbase" element={<FirstBaseMain />} />
        <Route path="/catcher" element={<CatcherMain />} /> */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
