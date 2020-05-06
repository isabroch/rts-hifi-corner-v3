import { css } from "@emotion/core";

const ButtonStyle = ({
  textColor = "inherit",
  backgroundColor = "inherit"
}) => css`
  font: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  text-transform: uppercase;
  color: ${textColor};
  background-color: ${backgroundColor};
  border: none;
  padding: 0.75em 1.25em;
  cursor: pointer;
`;

export default ButtonStyle;
