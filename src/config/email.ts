import nodemailer from 'nodemailer';
import 'dotenv/config';
import { ISendEmail } from '../shared/models/ISendEmail';
import { error, info } from 'console';

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

export const sendEmail = ({ to, subject, body }: ISendEmail) =>{
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: body,
    };
    transporter.sendMail(mailOptions,(error, info) =>{
        if (error) {
            console.error('Erro ao enviar email:',error);
        }else {
            console.log('Email enviado:', info.response);
        }

    });
};