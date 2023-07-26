import React from 'react';
import { useEffect } from 'react';
import logements from '../datas/logements.json'
import { useParams, useNavigate, } from "react-router-dom";
import Dropdown from './Dropdown';
{/*import Accordion from './Accordion';

const title = ["Description 1", "Équipements 1"]*/}

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
        <div>
            <section className="housingDropdown">
                <Dropdown text="Description">
                    <p>{logement.description}</p>
                </Dropdown>
                <Dropdown text="Équipement">
                    {<ul>{logement.equipments.map((equipement) =>
                        <li key={equipement}>{equipement}</li>)}
                    </ul>}
                </Dropdown>
            </section>
          {/*}  <section className="accordionSection ">
                <div className="accordionBody">
                    <div className="accordionTitle ">
                        <Accordion key={title} title={title[0]} content={<p>{logement.description}</p>} />
                    </div>
                </div>
                <div className="accordionBody">
                    <Accordion key={title} title={title[1]} content={<ul>{logement.equipments.map((equipement) =>
                        <li key={equipement}>{equipement}</li>)}
                    </ul>} />
                </div>

                    </section>*/}
        </div>

    );
};

export default HousingDropdown;