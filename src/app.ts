import express from 'express'
import "./config/db"
import appRoutes from './routes/routes'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(appRoutes)


export default app