
const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');
const url = process.env.URL 
const connectDB = async()=>{
   try {
     await mongoose.connect(url)
            console.log(`Database connected at ${url}`)
   } catch (error) {
     console.log(`Database connection error ${error}`)
   }
}

module.exports = connectDB;