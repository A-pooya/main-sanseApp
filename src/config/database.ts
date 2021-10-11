import mongoose from "mongoose";

const uri:string = "mongodb://localhost:27017/ticket_App"


const database = async():Promise<void> => {
    try {
        await mongoose.connect(uri)
        return console.log(`database is connected on ${mongoose.connection.host}`)
    } catch (err) {
        return console.log(err);
    }
}

export {database} 