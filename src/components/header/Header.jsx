import { Outlet, Link } from "react-router-dom";
import './header.css'
const Header = () => {
  return (
    <header className='navigation fixed-top'>
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <Link className="navbar-brand font-tertiary h3" to="/" data-aos="fade-right">WAQAR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navigation">
          <ul className="navbar-nav ml-auto" data-aos="fade-down" data-aos-delay="1000">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">about</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page-not-found">Error</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
  </header>
    
  )
}

export default Header