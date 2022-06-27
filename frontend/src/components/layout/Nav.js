import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavList() {
  let activeStyle = {
    backgroundColor: "rgb(39, 133, 165)",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="nosotros"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="galeria"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink
            to="servicios"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="novedades"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Novedades
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Contacto"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
