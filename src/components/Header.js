import React from "react";
import { NavLink, NavLinks } from "./NavLink";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

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

const BottomNavbar = () => {
  const menuItems = [
    { title: "Home", url: "/" },
    { title: "About Us", url: null },
    { title: "Brands", url: "/brands" },
    { title: "News", url: null },
    { title: "Events", url: null },
    { title: "Shop", url: "/shop" },
    { title: "Contact Us", url: null }
  ];

  return <ul>{<NavLinks items={menuItems} />}</ul>;
};

const TopNavbar = () => {
  const menuItems = [
    {
      child: (
        <span>
          <FontAwesomeIcon fixedWidth icon={faUser} /> Account
        </span>
      ),
      title: "Account",
      url: null
    },
    {
      child: (
        <span>
          <FontAwesomeIcon fixedWidth icon={faShoppingCart} /> Cart
        </span>
      ),
      title: "Cart",
      url: null
    },
    {
      child: (
        <span>
          <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />
        </span>
      ),
      title: "Map",
      url: null
    },
    {
      child: (
        <span>
          <FontAwesomeIcon fixedWidth icon={faEnvelope} />
        </span>
      ),
      title: "Messages",
      url: null
    },
    {
      child: (
        <span>
          <FontAwesomeIcon fixedWidth icon={faPhoneAlt} />
        </span>
      ),
      title: "Contact",
      url: null
    }
  ];

  return <ul>{<NavLinks items={menuItems} />}</ul>;
};

const Header = props => {
  return (
    <nav css={linkStyles}>
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
};

export default Header;
