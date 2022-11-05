require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    return mongoose.connect(process.env.MONGO_CONNECTION_URL); 
} 



module.exports = connectDB;