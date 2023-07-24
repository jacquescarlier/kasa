import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingCarousel from "../components/HousingCarousel";
import HousingTitle from "../components/HousingDetail";
import HousingDropdown from "../components/HousingDropdown";

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
