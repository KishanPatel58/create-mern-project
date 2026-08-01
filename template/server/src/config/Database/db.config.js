const mongoose = require("mongoose");
const env = require("../Environment/env.config");

const connectDb = async () => {
    try {
        await mongoose.connect(env.MONGODB_URL);
        console.log("MongoDB Connected Successfully.")
    } catch (error) {
        throw new Error("Problem to Connect with Database.")
    }
}

module.exports = connectDb;