// import FakeRouter from '../cmps/FakeRouter'
import { NavLink, withRouter } from "react-router-dom";

function _Header(props) {
   console.log(props)
  return (
    <header className="app-header">
      <h1>Mister-Bitcoin</h1>
    <nav>
        <NavLink exact to='/'>Home</NavLink> |
        <NavLink exact to='/signup'>Signup</NavLink> |
        <NavLink exact to='/contact'>Contacts</NavLink> |
        <NavLink exact to='/chart'>Charts</NavLink>
    </nav>
  </header>
  )
}

export const Header = withRouter(_Header)

