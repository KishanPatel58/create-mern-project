const express = require("express");
const Cors = require("cors");
const cookieParser = require("cookie-parser");
const env = require("./config/Environment/env.config");
const authRouter = require("./routes/auth.routes");
const app = express();

// Required Middlewares.
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(Cors({
    origin: env.CLIENT_ORIGIN,
    // For Cookies.
    credentials: true
}))

// Health Route.
app.get("/",(req,res)=>{
    res.send("Server is Running...")
})

// All Routers.

// Auth Router.
app.use("/api/auth", authRouter)

module.exports = app;