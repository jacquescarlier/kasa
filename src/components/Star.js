import starActive from "../pictures/star-active 1.png"
import starInactive from "../pictures/star-inactive 1.png"
import HousingTable from "./HousingTable"

const Star = () => {

    const logement = HousingTable();
    const rating = logement.rating;
    const maxRating = 5;
    const star = [];
    for (let i = 1; i <= maxRating; i++) {
        star.push(
            <img
                key={i}
                src={i <= rating ? starActive : starInactive}
                alt={i <= rating ? "Active star" : "Inactive Star "}
            />
        )
    }

    return (
            <div className="star"> {star}</div>
    );
};

export default Star;