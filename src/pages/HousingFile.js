import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HousingCarousel from "../components/carousel/HousingCarousel";
import HousingTitle from "../components/housing/HousingDetail";
import HousingDropdown from "../components/housing/HousingDropdown";


const HousingFile = () => {

  

  return (
    <div>
      <container-general>
        <Header />
        <HousingCarousel />
        <HousingTitle />
        <HousingDropdown />
      </container-general>
      <Footer />
    </div>
  );
};

export default HousingFile;
