import { useParams } from "react-router-dom"
import logements from '../datas/logements.json'

const useHousing = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return logement;
};

export default useHousing;



