import nodemailer from 'nodemailer';

export async function sendPasswordResetEmail(email, resetToken) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.me.com',
            port: 587,
            secure: false,
            auth: {
                user: 'clemence.garde@icloud.com',
                pass: 'aqpz-teyq-czrv-xzhm',
            },
        });

    const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`; // À adapter

    const mailOptions = {
        from: 'clemence.garde@icloud.com',
        to: email,
        subject: 'Réinitialisation du mot de passe',
        text: `Vous avez effectué une demande de réinitialisation du mot de passe. Veuillez cliquer sur ce lien : ${resetUrl}`,
        html: `<p>Vous avez effectué une demande de réinitialisation du mot de passe. Veuillez cliquer sur ce lien :</p><p><a href="${resetUrl}">${resetUrl}</a></p>`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Password reset email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending password reset email:', error);
    }
}