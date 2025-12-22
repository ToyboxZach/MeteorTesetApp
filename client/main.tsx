import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { App } from "/imports/ui/App";
import _default from "@alias/file";
import { _ } from "@swc/helpers/_/_to_consumable_array";

console.log("LOADED ALIAS", _default);
Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container!);
  root.render(<App />);
});
