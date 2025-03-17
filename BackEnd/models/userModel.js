const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: String,
    country: String,
    city: String,
    interest: String,
    specialty: String,
    password: String,
    profilePic: String
},{
    timestamps: true 
})

const userModel = new mongoose.Model("user",userSchema )

module.exports = userModel
