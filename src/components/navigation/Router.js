import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import HousingFile from "../../pages/HousingFile";
import Page404 from "../../pages/Page404";


function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/HousingFile/:id" element={<HousingFile />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="*" element={<Page404 />} />
          <Route path="/HousingFile/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
