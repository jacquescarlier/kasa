import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HousingCarousel from "../components/carousel/HousingCarousel";
import HousingTitle from "../components/housing/HousingDetail";
import HousingDropdown from "../components/housing/HousingDropdown";
import { useParams } from "react-router-dom"
import logements from '../datas/logements.json'

const HousingFile = () => {

    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
  
  return (
    <div>
      <container-general>
        <Header />
        <HousingCarousel logement ={logement} />
        <HousingTitle logement ={logement} />
        <HousingDropdown logement ={logement} />
      </container-general>
      <Footer />
    </div>
  );
};

export default HousingFile;
