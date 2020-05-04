import React from "react";
import { Link } from "@reach/router";

function Navbar(props) {
  return (
    <ul>
      {props.menuItems.map(menuItem => (
        <li key={menuItem.title}>
          {menuItem.url ? (
            <Link to={menuItem.url}>{menuItem.title}</Link>
          ) : (
            <span>{menuItem.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
