import nodemailer from 'nodemailer';
//import 'dotenv/config'; // Al instalar dotenv se debe importar para node v 20
process.loadEnvFile();// Para no instalar ni importar dotenv, para node v 21 en adelante

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