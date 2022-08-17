// import FakeRouter from '../cmps/FakeRouter'
import { NavLink, withRouter } from "react-router-dom";


function _Header(props) {
  //  console.log(props)
  return (
    <header>
      <div className="app-header container">
      <h1>Mister-Bitcoin</h1>
    <nav>
        <NavLink exact to='/home'>Home</NavLink> |
        <NavLink exact to='/contact'>Contacts</NavLink> |
        <NavLink exact to='/chart'>Charts</NavLink>
        </nav>
        </div>
  </header>
  )
}

export const Header = withRouter(_Header)

