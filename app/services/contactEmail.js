import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

export async function sendContactEmail(email, name, message) {
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASS:', process.env.SMTP_PASS);
    console.log('EMAIL_FROM:', process.env.EMAIL_FROM);

    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.me.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false // For local development
        },
        debug: true // Enable debug output
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_FROM, // Send the email to yourself
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Email:</strong> ${name}</p><p><strong>Name:</strong> ${email}</p><p>${message}</p>`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Contact email sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending contact email:', error);
        return false;
    }
}
