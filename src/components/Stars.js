import starActive from "../pictures/star-active 1.png"
import starInactive from "../pictures/star-inactive 1.png"
import HousingTable from "./HousingTable"

const Stars = () => {

    const logement = HousingTable();
    const rating = logement.rating;
    const maxRating = 5;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <img
                key={i}
                src={i <= rating ? starActive : starInactive}
                alt={i <= rating ? "Active star" : "Inactive Star "}
            />
        )
    }

    return (
        <div>
            <div className="star"> {stars}</div>
        </div>
    );
};

export default Stars;