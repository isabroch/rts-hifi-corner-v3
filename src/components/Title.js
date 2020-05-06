import React from "react";
import ThemeContext from "./ThemeContext";
import { css } from "@emotion/core";
export const Title = ({
  className,
  children,
  priority = 0,
  textColor = "inherit"
}) => {
  const theme = React.useContext(ThemeContext);
  const HeaderPriority = Number(priority) > 0 ? `h${Number(priority)}` : `span`;
  const styles = css`
    color: ${textColor};
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.l};
    margin: 0.5em 0;
    text-transform: uppercase;
    display: block;
    text-shadow: ${theme.shadow};
  `;
  return (
    <HeaderPriority className={className} css={styles}>
      {children}
    </HeaderPriority>
  );
};
