import React, { useState } from "react"
import ArrowRight from "../pictures/arrow_forward.png"
import ArrowLeft from "../pictures/arrow_back.png"
import useHousingTable from "./UseHousingTable"
function Carousel() {
    const logement = useHousingTable();
    const pictureLength = logement.pictures.length;
    const [currentPictureIndex, setcurrentPictureIndex] = useState(0);
    const pictureCounter = `${currentPictureIndex + 1} / ${pictureLength}`
    
    const nextPicture = () => {
        const nextIndex = currentPictureIndex + 1
        setcurrentPictureIndex(nextIndex >= pictureLength ? 0 : nextIndex);
    };
  
    const previousPicture = () =>{
        const prevIndex = currentPictureIndex - 1
        setcurrentPictureIndex(prevIndex < 0 ? pictureLength - 1 : prevIndex)
    };

    const currentPicture = logement.pictures[currentPictureIndex]
    if (logement.pictures.length === 1) {
        return (
            <section className="carousel">
                <img src={currentPicture} alt="logement" className="carouselPicture" />
            </section>
        );
    }

    return (
        <section className="carousel">
            <img src={currentPicture} alt="logement" className="carouselPicture" />
            <img src={ArrowRight} alt="Fléche droite " onClick={nextPicture} className="carouselArrow carouselArrowRight "></img>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousPicture} className="carouselArrow carouselArrowLeft"></img>
            <div className="carouselCounter"> {pictureCounter}</div>
        </section>
    )
}
export default Carousel