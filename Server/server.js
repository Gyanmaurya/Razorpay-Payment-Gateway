const connectDB = require('./config/db');
const app = require('./index')
const PORT = 8000 || process.env.PORT;

require('dotenv').config();
const server = app.listen(PORT,()=>{
     connectDB()
      console.log(`Connected at the port ${PORT}`);
 })