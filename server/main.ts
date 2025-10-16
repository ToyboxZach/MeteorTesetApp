import { S3Client } from "@aws-sdk/client-s3";

console.log("s3client", S3Client);
import "meteor/aldeed:collection2/static";
import { bcrypt } from "bcrypt";
console.log("bcrypt", bcrypt);
import { ApiVersion, shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/dist/cjs/adapters/node";
import "./first";
import { Meteor } from "meteor/meteor";
console.log("I expect this to log second");
let isAppTest = Meteor.isAppTest;
console.log("isAppTest", isAppTest);
Meteor.methods({
  "test.method": () => {
    return { isAppTestInitial: isAppTest, isAppTestNow: Meteor.isAppTest };
  }
});
