
import starActive from "../pictures/star-active 1.png"
import starInactive from "../pictures/star-inactive 1.png"
import useHousingTable from "./UseHousingTable"

const HousingTitle = () => {
  const logement = useHousingTable();
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
    <section className="title" >
      <div className='titleInfo'>
        <h1> {logement.title}</h1>
        <p> {logement.location}</p>
      </div>
      <div className='titleName'>
        <p> {logement.host.name} </p>
        <img src={logement.host.picture} alt={logement.host.name}></img>
      </div>
      <div className="housingDetail">
        <div className='housingInformation'>
          {logement.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div >
      </div>
      <div className="star"> {stars}</div>
    </section>
  )
}
export default HousingTitle; 