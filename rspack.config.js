import { defineConfig } from "@meteorjs/rspack";
import { rspack } from "@rspack/core";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * Rspack configuration for Meteor projects.
 *
 * Provides typed flags on the `Meteor` object, such as:
 * - `Meteor.isClient` / `Meteor.isServer`
 * - `Meteor.isDevelopment` / `Meteor.isProduction`
 * - …and other flags available
 *
 * Use these flags to adjust your build settings based on environment.
 */
const config = defineConfig((Meteor) => {
  return {
    externals: [/^bcrypt/],
    resolve: {
      alias: {
        "@shopify/shopify-api": path.resolve(__dirname, "./node_modules/@shopify/shopify-api")
      },
      enforceExtension: false,
      fullySpecified: false,
      extensions: [".web.ts", ".web.tsx", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.js$/, // Target .js files
          use: {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "ecmascript",
                  jsx: true // Enable JSX parsing for JavaScript files
                }
              }
            }
          }
        }
      ]
    }
  };
});

export default config;
