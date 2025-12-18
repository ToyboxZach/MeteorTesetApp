import { defineConfig } from "@meteorjs/rspack";
import { rspack, DefinePlugin } from "@rspack/core";
import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlRspackPlugin from "html-rspack-plugin";

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
    experiments: {
      cache: false,
      css: true
    },
    plugins: [
      new DefinePlugin({
        // Define a string global variable
        __DEV__: false
      })
    ],
    resolve: {
      tsConfig: path.resolve(__dirname, "./tsconfig.json"),

      alias: {
        "@shopify/shopify-api": path.resolve(__dirname, "./node_modules/@shopify/shopify-api"),

        "three/examples": [path.resolve(__dirname, "./node_modules/three/examples")],
        "@react-native-async-storage/async-storage": [
          path.resolve(__dirname, "./node_modules/@react-native-async-storage/async-storage/lib/module/AsyncStorage")
        ]
      },
      enforceExtension: false,
      fullySpecified: false,
      extensions: [".web.ts", ".web.tsx", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".html"]
    },

    externals: [
      // Externalize specific native modules
      "@toyboxlabs3d/toybox_files",
      // Or, externalize all .node files
      function ({ request }, callback) {
        if (/\.node$/.test(request)) {
          return callback(null, `commonjs ${request}`);
        }
        callback();
      }
    ],

    module: {
      rules: [
        {
          test: /\.js$/, // Target .js files
          use: {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: { syntax: "typescript", tsx: true, jsx: true }
              }
            }
          }
        },
        // regex to get files from react-native-reanimated and react-native-gesture-handler
        {
          test: /react-native-reanimated|react-native-gesture-handler/,
          use: {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: { syntax: "typescript", tsx: true, jsx: true }
              }
            }
          }
        },

        {
          test: /quickhull3d/,
          resolve: {
            fullySpecified: false
          },
          use: {
            loader: "builtin:swc-loader",

            options: {
              jsc: {
                parser: { syntax: "ecmascript" }
              }
            }
          }
        }
      ]
    }
  };
});

export default config;
