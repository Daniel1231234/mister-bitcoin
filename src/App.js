import "./assets/scss/global.scss"
import React from "react"
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import { ContactDetails } from "./pages/ContactDetails"
import { ContactEdit } from "./pages/ContactEdit"
import { StatisticPage } from "./pages/StatisticPage"
import { Header } from "./cmps/Header"
import { PrivateRoute } from "./cmps/FakeRouter"
import { Signup } from "./pages/Signup"

// import ToggleDark from "./cmps/ToggleDark"
// import { ThemeContext, themes } from "./ThemeContext"

import { HashRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  // const [user, setUser] = React.useState(null)

  return (
    <Router>
      <div className="main-app">
        <Header />
        <main>
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <PrivateRoute path="/contact/:id" component={ContactDetails} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/chart" component={StatisticPage} />
            <Route path="/home" component={HomePage} />
            <PrivateRoute path="/" component={Signup} />
          </Switch>
        </main>
        <footer>Daniel Shechter 2022 &copy;</footer>
      </div>
    </Router>
  )
}

export default App

// function App() {
//   return (
//     <Router>
//       <div className="main-app">
//         <Header />
//         <main>
//           <FakeRouter path="/">
//             <HomePage />
//           </FakeRouter>
//           <FakeRouter path="/contact">
//             <ContactPage />
//           </FakeRouter>
//           <FakeRouter path="/chart">
//             <StatisticPage />
//           </FakeRouter>
//         </main>
//         <footer>BenGurionCmp 2022 &copy;</footer>
//       </div>
//     </Router>
//   )
// }

// export default App
