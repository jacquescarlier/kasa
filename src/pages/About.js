import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import picture from "../pictures/banniereAbout.png";
import Accordion from "../components/Accordion";
import { accordionData } from "../datas/accordionData";

const About = () => {
  
  return (
    <div>
      <container-general>
        <Header />
        <Banner image={picture} alt="photo de montagne" title="" />
        
        <section className="dropApropos">
        <div className="drop-apropos">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      </section>
      </container-general>
      <Footer />
    </div>
  );
};

export default About;

