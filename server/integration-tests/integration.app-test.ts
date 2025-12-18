import assert from "assert";
import { Meteor } from "meteor/meteor";

import puppeteer from "puppeteer";
const width = 1400;
const height = 1000;
describe("Run integration tests", () => {
  it("Runs integration tests", async () => {
    console.log("Integration tests ran");
    assert(Meteor.isAppTest);
    const result = await Meteor.callAsync("test.method");
    assert(Meteor.isServer, "IS SERVER");

    assert.deepEqual(result, { isAppTestInitial: true, isAppTestNow: true });
  });
  it("Runs browser based integration tests", async () => {
    console.log("STARTING BROWSER TEST");
    assert(this);
    const props = {
      headless: !!process.env.HEADLESS,
      timeout: 15 * 1000,
      defaultViewport: { width, height },
      args: [
        `--window-size=${width},${height}`,
        "–no-sandbox",
        "-disable-setuid-sandbox",
        "--enable-unsafe-swiftshader"
      ]
    };
    if (process.env.CHROME_COMMAND_LOCATION) {
      props.executablePath = process.env.CHROME_COMMAND_LOCATION;
    }
    const browser = await puppeteer.launch(props);
    console.log("LAUNCHED BROWSER");

    const page = await browser.newPage();
    console.log("NEW PAGE");

    page.goto("http://localhost:3000/");
    console.log("OPEN PAGE");

    console.log("WAITING FOR SELECTOR");
    await page.waitForSelector("#title");
    console.log("GOT SELECTOR");
  });
});
console.log("!!!");
