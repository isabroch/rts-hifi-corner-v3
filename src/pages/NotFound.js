/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "@reach/router";
import Block from "../components/Block";

export default function NotFound() {
  return (
    <Block background="white" textColor="black" centered>
      Couldn't find the page. Are you lost? &nbsp; <Link to="/">Go Home!</Link>
    </Block>
  );
}
