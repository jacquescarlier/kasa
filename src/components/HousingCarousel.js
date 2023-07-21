import React, { useState } from "react"
import ArrowRight from "../pictures/arrow_forward.png"
import ArrowLeft from "../pictures/arrow_back.png"

import { useParams } from "react-router-dom"
import logements from '../datas/logements.json'

const useHousing = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return logement;
};


function Carrousel() {
    const logement = useHousing();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const pictureCounter = `${currentImageIndex + 1} / ${logement.pictures.length}`
    const nextImage = () => {
        setCurrentImageIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length)
    };
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex === 0) {
                return logement.pictures.length - 1;
            } else {
                return (prevIndex - 1) % logement.pictures.length;
            }
        });
    }
    const currentImage = logement.pictures[currentImageIndex]
    if (logement.pictures.length === 1) {
        return (
            <section className="carrousel">
                <img src={currentImage} alt="logement" className="carrouselImg" />
            </section>
        );
    }
    return (
        <section className="carrousel">
            <img src={currentImage} alt="logement" className="carrouselImg" />
            <img src={ArrowRight} alt="Fléche droite " onClick={nextImage} className="carrouselArrow carrouselArrowRight "></img>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousImage} className="carrouselArrow carrouselArrowLeft"></img>
            <div className="carrouselCounter"> {pictureCounter}</div>
        </section>
    )
}
export default Carrousel