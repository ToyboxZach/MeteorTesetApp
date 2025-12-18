import assert from "assert";
import { Meteor } from "meteor/meteor";
import * as three from "three";
describe("run client test", () => {
  it("Runs a client test", async () => {
    console.log("Client test ran", three.Vector3);

    assert(Meteor.isClient);
  });
});
