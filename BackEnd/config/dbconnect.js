const mongoose = require("mongoose");

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDb;