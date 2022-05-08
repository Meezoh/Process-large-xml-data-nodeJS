import xml2js from "xml2js";
import xmlStream from "xml-stream";
import { createReadStream, createWriteStream } from "fs";

const numberFormat = (number: number) =>
  new Array(2 + 1 - (number + "").length).join("0") + number;

const dayFormat = (day: string | number) => (day == "0" ? 7 : day);

const timeCheck = (openTime: string, closeTime: string): boolean =>
  openTime < now && closeTime > now ? true : false;

const myReadStream = createReadStream("feed_sample.xml", "utf-8");
const myXmlStream = new xmlStream(myReadStream);
const myWriteStream = createWriteStream("feed_out.xml");

const date = new Date();
const hour = numberFormat(date.getHours());
const minute = numberFormat(date.getMinutes());
const day = dayFormat(date.getDay());
const now = hour + ":" + minute;

let countTrue = 0;
let countFalse = 0;

myXmlStream.on("endElement: offer", (offer: any) => {
  const times = offer.opening_times;
  const timesObj = JSON.parse(times);
  const entries = Object.entries(timesObj);

  for (const x of entries) {
    const [offerDay, arr] = x;

    if (typeof arr === "object" && arr !== null) {
      const obj = arr[0];

      if (obj !== undefined) {
        const { opening, closing } = obj;
        const checkTime = timeCheck(opening, closing);
        const checkDay = offerDay == day;

        if (checkDay && checkTime) offer.is_active = true;
        if (checkDay && checkTime === false) offer.is_active = false;

        const builder = new xml2js.Builder({ cdata: true });
        const offerObj = { offer };
        const newXml = builder.buildObject(offerObj);

        if (checkDay && checkTime) {
          countTrue++;
          myWriteStream.write(newXml);
        }
        if (checkDay && checkTime == false) {
          countFalse++;
          myWriteStream.write(newXml);
        }
      }
    }
  }
});

myXmlStream.on("end", () => {
  console.log("True count = ", countTrue);
  console.log("False count = ", countFalse);
});
