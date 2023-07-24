
import Header from "../components/Header";
import Footer from "../components/Footer";
import HousingCarousel from "../components/HousingCarousel";
import HousingTitle from "../components/HousingDetail";
import HousingValidity from "../components/HousingValidity";



const HousingFile = () => {


  return (
    <div>
      <container-general>
        <Header />
        <HousingCarousel />
        <HousingTitle />
        <HousingValidity />
      </container-general>
      <Footer />
    </div>
  );
};

export default HousingFile;
