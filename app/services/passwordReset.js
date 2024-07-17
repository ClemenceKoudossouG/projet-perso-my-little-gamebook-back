import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

export async function sendPasswordResetEmail(email, resetToken) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.me.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

    const resetUrl = `http://localhost:5173/request-password-reset/reset-password?token=${resetToken}`; 

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Réinitialisation du mot de passe',
        text: `Salut à toi, jeune aventurier ou jeune aventurière ! Tu as effectué une demande de réinitialisation du mot de passe. Clique sur ce lien : ${resetUrl}`,
        html: `<p>Salut à toi, jeune aventurier ou jeune aventurière ! Tu as effectué une demande de réinitialisation du mot de passe. Clique sur ce lien :</p><p><a href="${resetUrl}">${resetUrl}</a></p>`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Password reset email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending password reset email:', error);
    }
}