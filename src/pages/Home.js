import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Cards from "../components/card/Cards";
import Footer from "../components/footer/Footer";
import picture from "../pictures/banniere.png";

const Home = () => {
  return (
    <div>
      <container-general>
        <Header />
        <Banner
          image={picture}
          alt="photo de montagne"
          title="Chez vous, partout et ailleurs"
        />
        <Cards />
      </container-general>
      <Footer />
    </div>
  );
};

export default Home;
