import mongoose from 'mongoose'


const connectdb = async () =>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected.')
    }
    catch(err){
        console.log(err)
    }

}

export default connectdb