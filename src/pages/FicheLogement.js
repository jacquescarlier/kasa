import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logements from "../datas/logements.json";
import HousingCarousel from "../components/HousingCarousel";
import HousingDetail from "../components/HousingDetail";

const FicheLogement = () => {
  return (
    <div>
      <container-general>
        <Header />
        <HousingCarousel />
        <HousingDetail />
      </container-general>
      <Footer />
    </div>
  );
};

export default FicheLogement;
