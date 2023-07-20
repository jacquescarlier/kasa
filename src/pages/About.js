import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import picture from "../pictures/banniereAbout.png";
import Dropdown from "../components/Dropdown"

const About = () => {
  return (
    <div>
      <container-general>
        <Header />
        <Banner image={picture} alt="photo de montagne" title="" />
        <section className="dropApropos">
          <div className=" drop-apropos">
            <Dropdown text="Fiabilité">
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </Dropdown>
            <Dropdown text="Respect">
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Dropdown>
            <Dropdown text="Service">
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Dropdown>
            <Dropdown text="Sécurité">
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </Dropdown>
          </div>
        </section>
      </container-general>
      <Footer />
    </div>
  );
};

export default About;
