import React from "react";
import NavBar from "./NavBar";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import ThemeContext from "./ThemeContext";

const topMenuItems = [
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
        <FontAwesomeIcon fixedWidth icon={faPhoneAlt} />
      </span>
    ),
    title: "Contact",
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
  }
];
const bottomMenuItems = [
  { title: "Home", url: "/" },
  { title: "About Us", url: null },
  { title: "Brands", url: "/brands" },
  { title: "News", url: null },
  { title: "Events", url: null },
  { title: "Shop", url: "/shop" },
  { title: "Contact Us", url: null }
];

const Header = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <nav
      css={css`
        a {
          color: ${theme.color.neutralLight};
          font: inherit;
          cursor: pointer;
          text-decoration: none;
          background: transparent;
          border: none;
          padding: 0.25em 0.8em;
          text-transform: uppercase;
          text-align: center;
          display: inline-block;
          transition: 0.2s filter ease;
          &.active {
            color: ${theme.color.brand};
            font-weight: ${theme.fontWeight.bold};
          }
          &.disabled {
            opacity: 0.5;
            cursor: not-allowed;
            &:hover {
              filter: brightness(1);
            }
          }
          &:hover {
            filter: brightness(0.8);
          }
        }
      `}
    >
      <NavBar
        css={css`
          justify-content: flex-end;
          border-bottom: 1px solid ${theme.color.neutralDark};
          align-items: baseline;
          background: ${theme.color.darkOpacity};
        `}
        menuItems={topMenuItems}
      >
        <SearchBar />
      </NavBar>
      <NavBar
        css={css`
          justify-content: center;
          background: ${theme.color.dark};
        `}
        menuItems={bottomMenuItems}
      />
    </nav>
  );
};

export default Header;
