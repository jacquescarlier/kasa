import React, { useState } from "react"
import ArrowRight from "../pictures/arrow_forward.png"
import ArrowLeft from "../pictures/arrow_back.png"
import useHousingTable from "./UseHousingTable"
function Carrousel() {
    const logement = useHousingTable();
    const [currentPictureIndex, setcurrentPictureIndex] = useState(0);
    const pictureCounter = `${currentPictureIndex + 1} / ${logement.pictures.length}`
    
    const nextPicture = () => {
        setcurrentPictureIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length)
    };
  
    const previousPicture = () =>{
        setcurrentPictureIndex((prevIndex)=>(prevIndex - 1 + logement.pictures.length ) % logement.pictures.length) 
};

console.log("pictureCounter", pictureCounter)
console.log("length", logement.pictures.length)
console.log("currentIndex", currentPictureIndex)

    const currentPicture = logement.pictures[currentPictureIndex]
    if (logement.pictures.length === 1) {
        return (
            <section className="carrousel">
                <img src={currentPicture} alt="logement" className="carrouselPicture" />
            </section>
        );
    }

    return (
        <section className="carrousel">
            <img src={currentPicture} alt="logement" className="carrouselPicture" />
            <img src={ArrowRight} alt="Fléche droite " onClick={nextPicture} className="carrouselArrow carrouselArrowRight "></img>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousPicture} className="carrouselArrow carrouselArrowLeft"></img>
            <div className="carrouselCounter"> {pictureCounter}</div>
        </section>
    )
}
export default Carrousel