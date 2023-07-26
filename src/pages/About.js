import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import picture from "../pictures/banniereAbout.png";
import Accordion from "../components/Accordion";
import { accordionData } from "../datas/accordionAboutData";

const About = () => {

  return (
    <div>
      <container-general>
        <Header />
        <Banner image={picture} alt="photo de montagne" title="" />
        <section className="accordionSection">
          <div className="accordionBody">
            {accordionData.map(({ title, content, id }) => (
              <Accordion key={id} title={title} content={content} />
            ))}
          </div>
        </section>
      </container-general>
      <Footer />
    </div>
  );
};

export default About;

