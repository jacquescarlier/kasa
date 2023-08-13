import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import HousingFile from "../../pages/HousingFile";
import Page404 from "../../pages/Page404";

// la route /kasa/ est pour la publication du site sur github pages

function Router() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/HousingFile/:id" element={<HousingFile />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/HousingFile/*" element={<Page404 />} />
          <Route path ="/kasa/" element={<Home />} />
          <Route path = "https://jacquescarlier.github.io/" element ={<Home />} />
          <Route path = "https://jacquescarlier.github.io/HousingFile/:id" element={<HousingFile />} />
          <Route path = "https://jacquescarlier.github.io/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
