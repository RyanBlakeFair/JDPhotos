const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "joshuadaltonphotography@gmail.com", // generated ethereal user
    pass: "wgthkkszefewhrxh", // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const emailContent = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${body.name}</li>
      <li>Company: ${body.company}</li>
      <li>Email: ${body.email}</li>
      <li>Phone: ${body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${body.message}</p>
  `;
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Web Client" <joshuadaltonphotography@gmail.com>', // sender address
    to: "joshuadaltonphotography@gmail.com", // list of receivers
    subject: "Enquiry", // Subject line
    html: emailContent, // html body
  };

  // send mail with defined transport object
  const promiseEmail = await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        resolve("Error");
      }
      console.log("Message sent: %s", info.messageId);
      resolve("Success");
    });
  });

  return promiseEmail;
};
