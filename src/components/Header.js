import Navigation from './Navigation'
import '../Styles/components/header.css'

function Header() {
  return (
    <div className='header'>
      <img src="logoKasa.png" alt="logo kasa" />
      <Navigation />
    </div>
  )
}
export default Header