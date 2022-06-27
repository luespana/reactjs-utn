import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavList() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

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
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="servicios">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Servicios
              </span>
            )}
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
