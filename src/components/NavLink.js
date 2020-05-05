import React from "react";
import { Link } from "@reach/router";

const NavLink = props => {
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
};

export default NavLink;
