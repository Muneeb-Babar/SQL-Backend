import express from 'express'
import cros from 'cors'
import { PORT } from './config/envoirment.mjs'
import dataSource from './infrastructure/psql.mjs'

const app=express();

const startServer=async()=>{


app.listen(PORT,async()=>{
    console.log('Server is ready to use')
    await dataSource.initialize();
    console.log('DB is connected')
})

app.use(express.json())
app.use(cros())
}

export default startServer
 


