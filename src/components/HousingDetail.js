import Stars from "./Stars";
import useHousingTable from "./UseHousingTable"

const HousingTitle = () => {
  const logement = useHousingTable();

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
        <Stars />
      </div>
    </section>
  )
}
export default HousingTitle; 