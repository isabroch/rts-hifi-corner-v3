import React from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "./ThemeContext";

const SearchBar = () => {
  const [searchQuery, updateSearchQuery] = React.useState("");
  const [theme] = React.useContext(ThemeContext);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        alert(
          `Sorry, search function isn't complete yet! \n Why are you looking for ${searchQuery} anyways?`
        );
      }}
    >
      <div
        css={css`
          display: flex;
          align-items: baseline;
          border: 1px solid ${theme.color.neutral};
          height: 1.75em;
          width: 25vmax;
          margin: 0.25em 1.5em;
          position: relative;
          background: ${theme.color.light};
          overflow: hidden;
        `}
      >
        <input
          type="search"
          placeholder="Search entire store here..."
          value={searchQuery}
          onChange={e => updateSearchQuery(e.target.value)}
          css={css`
            box-sizing: border-box;
            padding: 0.5em 0 0.5em 0.5em;
            height: 100%;
            background: transparent;
            border: none;
            flex: 1;
            color: ${theme.color.neutralDark};
          `}
        />
        <button
          css={css`
            color: ${theme.color.neutral};
            padding: 0.5em;
            background: ${theme.color.light};
            border: none;
            cursor: pointer;
          `}
        >
          <FontAwesomeIcon fixedWidth icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
