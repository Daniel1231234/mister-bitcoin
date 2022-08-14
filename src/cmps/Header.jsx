import FakeRouter from '../cmps/FakeRouter'

export default function Header() {
  return (
    <header className="app-header">
      {/* <div className='container'> */}
    <h1>Mister-Bitcoin</h1>
    <nav>
      <a href="/" className="item">
        Home
      </a>
      |
      <a href="/contact" className="item">
        <FakeRouter path="/contact" />
        Contacts
      </a>
      |
      <a href="/chart" className="item">
        Charts
      </a>
        </nav>
    {/* </div> */}
  </header>
  )
}