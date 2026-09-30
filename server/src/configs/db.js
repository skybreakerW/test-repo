import mongoose from "mongoose"

const DB_NAME = "whatsapp"

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`DB Connected. Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Connection to DB failed!", error)
        throw error
    }
}

export default connectDB