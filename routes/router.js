import express from 'express';
import enviar from '../config/mailer.js';

const router = express.Router();

router.get('/',(req, res)=>{
    res.send('Wena guasho');
});

router.get('/enviar', (req,res)=>{
    const {to, subject, text}= req.query;

    enviar(to,subject,text);
    res.send('Correo enviado');
});

export default router;
