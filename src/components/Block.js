import React from "react";
import { css } from "@emotion/core";
import ThemeContext from "./ThemeContext";

const Block = ({
  className,
  background,
  noWrap,
  centered,
  textColor,
  fixed,
  padding,
  size,
  children
}) => {
  const theme = React.useContext(ThemeContext);

  const backgroundFrom = value => {
    // default background
    let backgroundValue = css`
      background-color: ${theme.color.dark};
    `;
    // check whether it should be backgroundImage or backgroundColor
    if (value && value.includes("http")) {
      backgroundValue = css`
        background-image: url(${background});
      `;
    } else if (value) {
      backgroundValue = css`
        background-color: ${background};
      `;
    }
    return backgroundValue;
  };

  return (
    <div
      className={className}
      css={css`
        display: flex;
        box-sizing: border-box;
        ${
          noWrap
            ? css`
                flex-wrap: nowrap;
              `
            : css`
                flex-wrap: wrap;
              `
        }
        ${
          centered
            ? css`
                align-items: center;
                justify-content: center;
                text-align: center;
              `
            : ""
        }
        color: ${textColor || theme.textColor};
        background-repeat: no-repeat;
        background-size: cover;
        ${
          size
            ? css`
                max-width: ${size};
                margin: 0 auto;
              `
            : ""
        }
        ${
          fixed
            ? css`
                background-attachment: fixed;
              `
            : ""
        }
        padding: ${padding || "2rem"};
        ${backgroundFrom(background)}
      `}
    >
      {children}
    </div>
  );
};

export default Block;
