import nodemailer from 'nodemailer'

import contactRepo from '../repository/contactusRepository.mjs'
import { ADMIN_EMAIL, EMAIL, Email_PASS } from '../config/envoirment.mjs'

const contactusService=async(clientData)=>{
    try{
        //save data in Reposaitory
        const contactUsDataService=await contactRepo(clientData)
        console.log("Data in service",contactUsDataService)

        // nodemailer setup

        let transpoter=nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: EMAIL,
                pass: Email_PASS,
            }
        })

        //Email options

        let adminMailOptions={
            from: EMAIL,
            to: ADMIN_EMAIL,
            subject: `New Contact Form Submission from ${clientData.name}`,
            text: `
                Name: ${clientData.name}
                Email: ${clientData.email}
                Phone: ${clientData.phone}
                Company: ${clientData.company}
                Service Type: ${clientData.serviceType}
                Message: ${clientData.message}
            `
        };

        let clientMailOptions={
            from: EMAIL,
            to: clientData.email,
            subject: `Thank you for contacting us ${clientData.name}`,
            text: 'Thank you for your submission. Our team will contact you soon.',
            };


            //Send Email

            await transpoter.sendMail(adminMailOptions)
            await transpoter.sendMail(clientMailOptions)
            console.log("Email sent successfully")
            return contactUsDataService
            
        }
    
    catch(e){
        console.log(e)
    }
}
export default contactusService