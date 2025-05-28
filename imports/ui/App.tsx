import React from "react";
import { Hello } from "./Hello";
import { Info } from "./Info";

import { Svg, Line } from "react-native-svg";
import { getCountry } from "react-native-localize";

console.log("Country:", getCountry());
export const App = () => (
  <div>
    <Svg pointerEvents="none" width={20} height={10} viewBox={`0 0 ${5} ${5}`}>
      <Line x1={5} y1={0} x2={10} y2={20} strokeLinecap="round" strokeWidth={3} />
      <Line x1={5} y1={10} x2={10} y2={20} strokeLinecap="round" strokeWidth={3} />
    </Svg>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
