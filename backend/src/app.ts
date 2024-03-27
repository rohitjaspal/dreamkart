import express from 'express'
import cors from 'cors'
import "./config/db"
import appRoutes from './routes/routes'


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api',appRoutes)


export default app