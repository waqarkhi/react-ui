import {Link} from 'react-router-dom'

const Nav = ({menu,open}) => {
  return (
    <ul className="navbar-nav ml-auto" data-aos="fade-down" data-aos-delay="1000">
        {menu.map((item) => (
            <li className="nav-item" key={item.id}>
                <Link className="nav-link" onClick={()=> open(!open)} to={item.to}>{item.text}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Nav