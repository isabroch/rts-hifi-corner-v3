/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "@reach/router";

export default function NotFound() {
  return (
    <div>
      Couldn't find the page. Are you lost? <Link to="/">Go Home!</Link>
    </div>
  );
}
