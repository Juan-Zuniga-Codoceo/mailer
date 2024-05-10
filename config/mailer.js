import nodemailer from 'nodemailer';
import 'dotenv/config';

const {USER_EMAIL,USER_PASS} = process.env;

const enviar = (to,subject,html) =>{
    //configuarcion del correo
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:  USER_EMAIL,
            pass: USER_PASS
        }
    })

    //configuracion de opciones
    const mailoptions ={
        from: USER_EMAIL,
        to,
        subject,
        html
    }

    //envio del correo
    transporter.sendMail(mailoptions,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`Email enviado: ${info.response}`)
        }
    })
}

export default enviar;