const nodemailer = require("nodemailer");

const htmlContent = (data) => {
  const { purpose, OTP } = data;
  switch (purpose) {
    case "Reset Password":
      return `<b> Your OTP (One Time Password Is ) ${OTP}</b>
      <p> It Expires In 1 Minute </p>
      `;
  }
};

const sendMail = async (data) => {
  const { purpose, userData } = data;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "preetam@gmail.com",
      to: userData.email, 
      subject: purpose,
      html: htmlContent(data),
    });

    // console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; 
  }
};

module.exports = { sendMail };

