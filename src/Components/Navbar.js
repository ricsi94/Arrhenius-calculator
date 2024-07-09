import { NavLink , Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {


  return (

    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <ul className="nav col-md-12 col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink className="nav-link px-2 link-dark" to="/"><i className="bi bi-house"></i>Home</NavLink></li>
            <li><NavLink className="nav-link px-2 link-dark" to="/details"><i className="bi bi-layout-text-sidebar-reverse"></i>Details</NavLink></li>
        </ul>
    </header>

  )
}
