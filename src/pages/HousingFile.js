import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HousingCarousel from "../components/carousel/HousingCarousel";
import HousingDetail from "../components/housing/HousingDetail";
import HousingDropdown from "../components/housing/HousingDropdown";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import logements from '../datas/logements.json'

const HousingFile = () => {

  const { id } = useParams();
  const logement = logements.find((item) => item.id === id)

  const navigate = useNavigate();
  useEffect(() => {
    if (!logement) {
      console.log("Redirection Page 404");
      navigate("/Page404");
    }
  }, [logement]);

  if (!logement) {
    return null
  }


  return (
    <div>
      <div className="container-general">
        <Header />
        <HousingCarousel logement={logement} />
        <HousingDetail logement={logement} />
        <HousingDropdown logement={logement} />
      </div>
      <Footer />
    </div>
  );
};

export default HousingFile;
