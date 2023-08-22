import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import allRoutes from './routes'

// use prisma to read and write data in the database 
dotenv.config()

//Iniciamos una instancia de express
const app = express()

const corsOption = {
    origin: '*' //origen donde se puede usar la API
}

app.use(cors(corsOption))
app.use(express.json())

//Asociar las rutas 
app.use("/api",allRoutes)

export default app