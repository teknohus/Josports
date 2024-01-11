import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from "./components/pages/product";
import Main from "./components/customizers/FielderMain"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/fielder" element={<Main />} />
        <Route path="/firstbase"/>
        <Route path="/catcher"/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
