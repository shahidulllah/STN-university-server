import nodemailer from 'nodemailer'
import config from '../config';

export const sendEmail = async () => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: config.NODE_ENV === 'production',
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "mdshahidsumon177@gmail.com",
          pass: "vnae goqa gjfr qcsb",
        },
      });

       await transporter.sendMail({
        from: 'mdshahidsumon177@gmail.com', // sender address
        to: "mdshahidsumon178@gmail.com", // list of receivers
        subject: "This is Hello for changing password ✔", // Subject line
        text: "You forgot parssword??", // plain text body
        html: "<b>You forgot parssword??</b>", // html body
      });
}