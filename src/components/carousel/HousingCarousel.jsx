import React, { useState } from "react"
import ArrowRight from "../../pictures/arrow_forward.png"
import ArrowLeft from "../../pictures/arrow_back.png"

const Carousel = ({ logement }) => {
    const pictureLength = logement.pictures.length;
    const [currentPictureIndex, setcurrentPictureIndex] = useState(0);
    //counter display constant at  the bottom of the image "currentPictureIndex +1" because ID starts at 0
    const pictureCounter = `${currentPictureIndex + 1} / ${pictureLength}`

    const nextPicture = () => {
        const nextIndex = currentPictureIndex + 1
        setcurrentPictureIndex(nextIndex >= pictureLength ? 0 : nextIndex);
    };
    const previousPicture = () => {
        const prevIndex = currentPictureIndex - 1
        setcurrentPictureIndex(prevIndex < 0 ? pictureLength - 1 : prevIndex)
    };
    //No direction arrow and counter if only one image
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
            <img src={currentPicture} alt={logement.title} className="carouselPicture" />
            <img src={ArrowRight} alt="Fléche droite " onClick={nextPicture} className="carouselArrow carouselArrowRight "></img>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousPicture} className="carouselArrow carouselArrowLeft"></img>
            <div className="carouselCounter"> {pictureCounter}</div>
        </section>
    )
}
export default Carousel