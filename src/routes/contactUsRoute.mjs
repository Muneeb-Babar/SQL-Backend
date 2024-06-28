import express from 'express'

import contactUs from "../controller/contactUsController.mjs";


const router=express.Router()

router.use('/contact-us',contactUs)

export default router

