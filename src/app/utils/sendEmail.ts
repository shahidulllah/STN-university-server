import nodemailer from 'nodemailer'
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
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
        to, // list of receivers
        subject: "This is Hello for changing password ✔", // Subject line
        text:"", // plain text body
        html, // html body
      });
}