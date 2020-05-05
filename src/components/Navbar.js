import React from "react";
import { Link } from "@reach/router";

function NavLink(props) {
  return (
    <Link
      {...props}
      getProps={({ isPartiallyCurrent, isCurrent }) => {
        // for 'home' link, use full specificity
        // for all other links, use partial specifcity, to check for nested links
        const isCurrentSpecificity =
          props.to === "/" ? isCurrent : isPartiallyCurrent;
        return { className: isCurrentSpecificity ? "active" : "" };
      }}
    />
  );
}

function NavBar(props) {
  return (
    <ul>
      {props.menuItems.map(menuItem => (
        <li key={menuItem.title}>
          {menuItem.url ? (
            <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
          ) : (
            <span>{menuItem.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
