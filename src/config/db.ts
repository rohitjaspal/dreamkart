import mongoose from "mongoose";
import { environment } from "./environment";

(async () => {
    try {
        const conn = await mongoose.connect(environment.MONGO_URI)
        console.log(`Mongodb is connected at : ${environment.MONGO_URI}`)

    }
    catch (err) {
        console.log(err)
        throw err
    }
})()
