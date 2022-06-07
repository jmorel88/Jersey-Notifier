import pupeteer from "puppeteer";
import { sendSMS } from "./sms.js";

export async function scrape() {
  const url = `https://shop.msg.com/collections/association-white-jerseys/player_derrick-rose+size-large`;
  const browser = await pupeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const isSoldOut = await page.$(".empty");

  if (isSoldOut) {
    console.log("Jerseys are sold out :(");
  } else {
    await sendSMS(`Jerseys are back in stock! ${url}`);
  }

  await browser.close();
}
