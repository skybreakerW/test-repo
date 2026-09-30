import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import { isValidName, isValidEmail, isValidPassword } from "../utils/validator.js"


const signup = async(req, res) => {
    try {

        const { name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required."
            })
        }

        if(!isValidName){
            return res.status(400).json({
                message: "All fields are required."
            })
        }

        if(!isValidEmail){
            return res.status(400).json({
                message: "All fields are required."
            })
        }

        if(!isValidPassword){
            return res.status(400).json({
                message: "All fields are required."
            })
        }

        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(409).json({
                message: "User already registered."
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const normalizedEmail = email.trim().toLowerCase()

        const user = await User.create({
            name,
            email: normalizedEmail,
            password: hashPassword,
        })

        return res.status(201).json({
            message: "User registered successfully.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })


    } catch (error) {
        console.log("Signup error: ", error)

        return res.status(500).json({
            message: "Something went wrong."
        })
    }
}


export {
    signup,

}