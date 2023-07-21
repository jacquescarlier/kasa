import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
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
