import { useParams } from "react-router-dom"
import logements from '../datas/logements.json'

const HousingTable = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return logement;
};

export default HousingTable;



