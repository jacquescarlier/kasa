import Star from "./Star";
import HousingTable from "./HousingTable"

const HousingTitle = () => {
  const logement = HousingTable();

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
      <Star />
    </section>
  )
}
export default HousingTitle; 