import assert from "assert";
import { Meteor } from "meteor/meteor";

describe("run server test from inside folder", () => {
  it("Runs a server test", async () => {
    assert(Meteor.isServer);
    assert(Meteor.isTest);
  });
});
