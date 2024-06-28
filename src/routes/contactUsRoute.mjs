import express from 'express'

import contactUs from "../controller/contactUsController.mjs";


const router=express.Router()

router.use('/contactus',contactUs)

export default router

