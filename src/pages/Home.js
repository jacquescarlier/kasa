import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import "../Styles/general.css";

const Home = () => {
  return (
    <div>
      <container-general>
        <Header />
        <Banner />
        <Cards />
      </container-general>
      <Footer />
    </div>
  );
};

export default Home;
