import React from "react";
import { Info } from "./Info";
import { NonComplying } from "./nonComplying";

export const App = () => (
  <div>
    <h1 id="title">Welcome to Meteor!</h1>
    <NonComplying />
    <Info />
  </div>
);
