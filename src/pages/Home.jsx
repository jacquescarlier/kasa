import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import picture from "../pictures/banniere.png";
import Card from "../components/card/Card";
const Home = () => {

  return (
    <div>
      <div className="container-general">
        <Header />
        <section className="image-banner banner-home">
          <Banner
            className="image-banner"
            image={picture}
            alt="photo de montagne"
            title1="Chez vous,"
            title2="partout et ailleurs"
          />
        </section>
        <section className="cards">
          <Card />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
