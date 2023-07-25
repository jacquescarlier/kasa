import React from 'react';
import { useEffect } from 'react';
import logements from '../datas/logements.json'
import { useParams, useNavigate, } from "react-router-dom";
import Dropdown from './Dropdown';


const HousingDropdown = () => {
    const { id } = useParams()
    const logement = logements.find((housing) => housing.id === id)
    const navigate = useNavigate();
    
    useEffect(() => {
     
        if (!logement) {
            console.log("Logement non trouvé.404");
            navigate("/Page404");
        }
    }, [logement, navigate]);
   

    return (
       
           <section className="housingDropdown">
                
                <Dropdown text="Description">
                    <p>{logement.description}</p>
                </Dropdown>
                <Dropdown text="Equipement">
                    {<ul>{logement.equipments.map((equipement) =>
                        <li key={equipement}>{equipement}</li>)}
                    </ul>}
                </Dropdown>
                
                    </section>
        
    );
};

export default HousingDropdown;