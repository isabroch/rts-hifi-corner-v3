import React from "react";
import Navbar from "./NavBar";
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

const headerStyles = css`
  a {
    color: orange;
  }

  a.active {
    color: green;
  }
`;

function Header(props) {
  return (
    <nav css={headerStyles}>
      Header
      <Navbar menuItems={menuItems} />
    </nav>
  );
}

export default Header;
