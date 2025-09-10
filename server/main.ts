import { S3Client } from "@aws-sdk/client-s3";

console.log("s3client", S3Client);
import "meteor/aldeed:collection2/static";
import { bcrypt } from "bcrypt";
console.log("bcrypt", bcrypt);
import { ApiVersion, shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/dist/cjs/adapters/node";

shopifyApi({
  apiKey: "apiKey",
  apiSecretKey: "secret",
  hostName: "host",
  scopes: ["write_orders"],
  isEmbeddedApp: true,
  apiVersion: ApiVersion.July25

  // SESSION_STORAGE: new Shopify.Session.CustomSessionStorage(StoreSession, GetSession, DeleteSession),
});
