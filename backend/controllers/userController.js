import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

const saltRounds = Number(process.env.SALT_ROUNDS)

// Login User

const loginUser = async (req, res) => {


}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn:"1h"});
}


// Register User

const registerUser = async (req, res) => {
     const {name, email, password} = req.body;
    try {
        //check if user already exist
        const existUser = await userModel.findOne({ email });
        if(existUser){
            return res.json({success:false, message:"User already exist"});
        }

        //validate email format & password strength
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Invalid email format"});
        }
        if(password.length < 8){
            return res.json({success:false, message:"Password must be at least 8 characters long"});
        }

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const User = await newUser.save();
        const token = createToken(User._id);

        res.json({success:true, message:"User registered successfully",token, user:User});

    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}
export {loginUser, registerUser};