import nodemailer from 'nodemailer';

const to = process.env.SMTP_FROM;
const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USERNAME;
const pass = process.env.SMTP_PASSWORD;

export const transporter = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass,
  },
});

export const emailOptions = {
  from: "donotreply@upoui.com",
  to,
};
