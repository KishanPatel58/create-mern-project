const env = require("./src/config/Environment/env.config");
const server = require("./src/app");
const connectDb = require("./src/config/Database/db.config");
const port = env.PORT;

// Listen the Server.
server.listen(port, () => {
    // Connect the Database.
    console.log(`Server is Running on PORT: ${port}`)
    console.log(`Ctrl + Click: http://localhost:${port} to check.`)
    connectDb()
})