import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="holder">
        <ul className='lista' >
          <li> <Link to="/">Inicio</Link></li>
          <li> <Link to="/nosotros">Nosotros</Link></li>
          <li> <Link to="/servicios">Servicios</Link></li>
          <li> <Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav