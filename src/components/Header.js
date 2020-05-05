import React from "react";
import NavLink from "./NavLink";
import { css } from "@emotion/core";

const menuItems = [
  { title: "Home", url: "/" },
  { title: "About Us", url: null },
  { title: "Brands", url: "/brands" },
  { title: "News", url: null },
  { title: "Events", url: null },
  { title: "Shop", url: "/shop" },
  { title: "Contact Us", url: null }
];

const linkStyles = css`
  a {
    color: orange;
  }

  a.active {
    color: green;
  }

  a.disabled {
    color: gray;
  }
`;

const BottomNavbar = () => (
  <ul>
    {menuItems.map(menuItem => (
      <li key={menuItem.title}>
        {menuItem.url ? (
          <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
        ) : (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="disabled">{menuItem.title}</a>
        )}
      </li>
    ))}
  </ul>
);

const TopNavbar = () => (
  <ul>
    <li>Empty</li>
  </ul>
);

const Header = props => {
  return (
    <nav css={linkStyles}>
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
};

export default Header;
