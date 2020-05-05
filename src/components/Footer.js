import React from "react";
import Block from "./Block";
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebookF,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcApplePay,
  faCcPaypal
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterBlock = props => (
  <Block
    css={css`
      background: transparent;
      align-items: flex-start;
      padding: 1.2rem;
    `}
  >
    {" "}
    {props.children}
  </Block>
);

const socialMediaItems = [
  {
    title: "facebook",
    url: "/facebook",
    child: <FontAwesomeIcon fixedWidth icon={faFacebookF} />
  },
  {
    title: "youtube",
    url: "/youtube",
    child: <FontAwesomeIcon fixedWidth icon={faYoutube} />
  },
  {
    title: "twitter",
    url: "/twitter",
    child: <FontAwesomeIcon fixedWidth icon={faTwitter} />
  },
  {
    title: "instagram",
    url: "/instagram",
    child: <FontAwesomeIcon fixedWidth icon={faInstagram} />
  }
];

const Footer = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <footer
      css={css`
        background: ${theme.color.brand};
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      `}
    >
      <FooterBlock>
        <address
          css={css`
            color: ${theme.color.dark};
            font-size: ${theme.fontSize.s};
            font-weight: ${theme.fontWeight.bold};
            font-style: normal;
            margin-right: 2em;
          `}
        >
          Hi-Fi Corner <br />
          Random House 5 Road 2 <br />
          Random Town in Random Country <br />
        </address>
        <Link
          to="/policy"
          css={css`
            text-transform: uppercase;
            text-decoration: underline;
            color: inherit;
            display: inline;
          `}
        >
          Returns & Refunds
        </Link>
      </FooterBlock>
      <FooterBlock>
        <NavBar
          css={css`
            padding: 0;
            font-size: ${theme.fontSize.m};
            align-items: center;

            li {
              margin: 0 5px;
            }
            a {
              width: 1.5em;
              height: 1.5em;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 100%;
              color: inherit;
              border: 1px solid ${theme.color.light};
            }
          `}
          menuItems={socialMediaItems}
        >
          <FontAwesomeIcon fixedWidth icon={faCcVisa} />
          <FontAwesomeIcon fixedWidth icon={faCcMastercard} />
          <FontAwesomeIcon fixedWidth icon={faCcAmex} />
          <FontAwesomeIcon fixedWidth icon={faCcPaypal} />
        </NavBar>
      </FooterBlock>
    </footer>
  );
};

export default Footer;
