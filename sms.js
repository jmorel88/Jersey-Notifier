import twilio from "twilio";
import dotenv from "dotenv-yaml";
dotenv.config();

const sid = process.env.TWILIO_SID;
const token = process.env.TWILIO_TOKEN;
const client = twilio(sid, token);
const from = process.env.TWILIO_PHONE_NUMBER;
const to = process.env.MY_PHONE_NUMBER;

export const sendSMS = async (body) => {
  console.log(body);
  const message = await client.messages.create({ body, from, to });
  return message;
};
