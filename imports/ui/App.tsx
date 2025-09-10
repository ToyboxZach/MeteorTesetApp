import React from "react";
import { Info } from "./Info";
import { NonComplying } from "./nonComplying";

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <NonComplying />
    <Info />
  </div>
);
