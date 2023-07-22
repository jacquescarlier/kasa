import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingCarousel from "../components/HousingCarousel";
import HousingTitle from "../components/HousingDetail";
import Dropdown from "../components/Dropdown";

const HousingFile = () => {
  return (
    <div>
      <container-general>
        <Header />
        <HousingCarousel />
        <HousingTitle />
        <section className="rentalDetails">
          <Dropdown text="Description"></Dropdown>
          <Dropdown text="Équipement"></Dropdown>
        </section>
      </container-general>
      <Footer />
    </div>
  );
};

export default HousingFile;
