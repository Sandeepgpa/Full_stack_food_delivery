import mongoose from 'mongoose'


const connectdb = async () =>{
    await mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log('Database Connected.')})
    
    // try{
    //     mongoose.connect(process.env.MONGODB_URL)
    //     console.log('Database connected.')
    // }
    // catch(err){
    //     console.log(err)
    // }

}

export default connectdb