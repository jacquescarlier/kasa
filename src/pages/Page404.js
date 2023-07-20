import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <container-general>
        <Header />
        <div className="page404">
        <img src="404.png" alt="" />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <NavLink to="/"><p className="goHome">Retourner sur la page d'accueil</p></NavLink>
        </div>
      </container-general>
      <Footer />
    </div>
  );
};

export default Page404;