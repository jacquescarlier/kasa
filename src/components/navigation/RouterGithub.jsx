import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import HousingFile from "../../pages/HousingFile";
//import Page404 from "../../pages/Page404";


function RouterGithub()  {
    return (
        <div>
            <BrowserRouter>
        <Routes>
          <Route path ="/kasa/" element={<Home />} />
        </Routes>
      </BrowserRouter>
        </div>
    );
};

export default RouterGithub;