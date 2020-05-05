import React from "react";
import { css } from "@emotion/core";
import ThemeContext from "./ThemeContext";

const Block = props => {
  const theme = React.useContext(ThemeContext);

  const background = value => {
    // default background
    let background = css`
      background-color: ${theme.color.dark};
    `;
    // check whether it should be backgroundImage or backgroundColor
    if (value.includes("http")) {
      background = css`
        background-image: url(${props.background});
      `;
    } else if (value) {
      background = css`
        background-color: ${props.background};
      `;
    }
    return background;
  };

  return (
    <div
      className={props.className}
      css={css`
        display: flex;
        ${
          props.centered
            ? css`
                align-items: center;
                justify-content: center;
                text-align: center;
              `
            : ""
        }
        color: ${props.color || theme.textColor};
        background-repeat: no-repeat;
        background-size: cover;
        ${
          props.fixed
            ? css`
                background-attachment: fixed;
              `
            : ""
        }
        padding: ${props.padding || "2rem"};
        ${background(props.background)}
      `}
    >
      {props.children}
    </div>
  );
};

export default Block;
