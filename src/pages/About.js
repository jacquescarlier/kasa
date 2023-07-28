import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import picture from "../pictures/banniereAbout.png";
import Accordion from "../components/accordions/Accordion";
import { accordionData } from "../datas/accordionAboutData";

const About = () => {

  return (
    <div>
      <div className="container-general">
        <Header />
        <Banner image={picture} alt="photo de montagne" title1="" title2="" className="banner-about" />
        <section className="accordionSection">
          <div className="accordionBody">
            {accordionData.map(({ title, content, id }) => (
              <Accordion key={id} title={title} content={content} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;

