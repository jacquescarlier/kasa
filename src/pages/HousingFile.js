import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingCarousel from "../components/HousingCarousel";
import HousingTitle from "../components/HousingDetail";
import Dropdown from "../components/Dropdown";
import logements from '../datas/logements.json'
import useHousingTable from "../components/UseHousingTable";



const HousingFile = () => {
  return (
    <div>
      <container-general>
        <Header />
        <HousingCarousel />
        <HousingTitle />
        <section className="rentalDetails">
          <Dropdown text="Description">
            <p> </p>
          </Dropdown>
          <Dropdown text="Équipement">
            <ul>
              <li></li>
            </ul>
          </Dropdown>
        </section>
      </container-general>
      <Footer />
    </div>
  );
};

export default HousingFile;
