// import FakeRouter from '../cmps/FakeRouter'
import { NavLink, withRouter } from "react-router-dom";

 function _Header(props) {
  return (
    <header className="app-header">
    <h1>Mister-Bitcoin</h1>
    <nav>
        <NavLink exact to='/'>Home</NavLink> |
        <NavLink exact to='/contact'>Contacts</NavLink> |
        <NavLink exact to='/chart'>Charts</NavLink>
    </nav>
  </header>
  )
}

export const Header = withRouter(_Header)


      // {/* <a href="/" className="item">
      //   Home
      // </a>
      // |
      // <a href="/contact" className="item">
      //   <FakeRouter path="/contact" />
      //   Contacts
      // </a>
      // |
      // <a href="/chart" className="item">
      //   Charts
      // </a> */}