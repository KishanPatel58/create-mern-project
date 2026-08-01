const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username is Required to Create an account."]
    },
    email: {
        type: String,
        required: [true, "Email is Required to Create an account."],
        unique: [true, "Invalid Email."],
        lowercase: [true, "Invalid Email."],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email."]
    },
    password: {
        type: String,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/, "Invalid Password."]
    },
    profilePicture: {
        type: String
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema);

module.exports = User;