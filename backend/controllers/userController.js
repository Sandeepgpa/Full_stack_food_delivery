import userModel from '../models/userModel.js';
import jws from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// Login User

const loginUser = async (req, res) => {


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

    } catch (error) {
        
    }
}

export {loginUser, registerUser};