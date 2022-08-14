import "./assets/scss/global.scss"
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import { StatisticPage } from "./pages/StatisticPage"
import Header from "./cmps/Header"
import FakeRouter from "./cmps/FakeRouter"

function App() {
  return (
    <div className="main-app">
      <Header />
      <main>
        <FakeRouter path="/">
          <HomePage />
        </FakeRouter>
        <FakeRouter path="/contact">
          <ContactPage />
        </FakeRouter>
        <FakeRouter path="/chart">
          <StatisticPage />
        </FakeRouter>
      </main>
      <footer>BenGurionCmp 2022 &copy;</footer>
    </div>
  )
}

export default App
