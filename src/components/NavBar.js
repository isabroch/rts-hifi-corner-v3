import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

export const NavLink = props => (
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

export const NavBar = props => {
  return (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        margin: 0;
        list-style: none;
      `}
      // get extra styling from component css call
      className={props.className}
    >
      {// if children, wrap them as list item and add before any menu links
      React.Children.map(props.children, child => (
        <li>{child}</li>
      ))}
      {// render menu links
      props.menuItems.map(item => (
        <li key={item.title}>
          {item.url ? (
            <NavLink to={item.url}>{item.child || item.title}</NavLink>
          ) : (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className="disabled">{item.child || item.title}</a>
          )}
        </li>
      ))}
    </ul>
  );
};
