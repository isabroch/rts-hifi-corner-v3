import React from "react";
import { Link } from "@reach/router";

const NavLink = props => (
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

const NavLinks = props =>
  props.items.map(item => (
    <li key={item.title}>
      {item.url ? (
        <NavLink to={item.url}>{item.child || item.title}</NavLink>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="disabled">{item.child || item.title}</a>
      )}
    </li>
  ));

export { NavLink, NavLinks };
