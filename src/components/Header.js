import React from "react";
import Navbar from "./Navbar";

const menuItems = [
  { title: "Home", url: "/" },
  { title: "About Us", url: null },
  { title: "Brands", url: "/brands" },
  { title: "News", url: null },
  { title: "Events", url: null },
  { title: "Shop", url: "/shop" },
  { title: "Contact Us", url: null }
];

function Header(props) {
  return (
    <div>
      Header
      <Navbar menuItems={menuItems} />
    </div>
  );
}

export default Header;
