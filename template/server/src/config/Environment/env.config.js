// Config Backend Environment.
require("dotenv").config({quiet: true});

// Export all the variables.
module.exports = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN
}