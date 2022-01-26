const express = require('express')
const scrapeRoutes = require("./routes/scrapper.route")
const userRoutes = require("./routes/user.route")
const cors = require('cors')
const connectDB = require('./config/db')


const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use("/api", scrapeRoutes)
app.use("/api/user", userRoutes )


connectDB().
then(() => {
    app.listen(5000, ()=>console.log("server started"))
}).catch(err => console.log("Connection error"))

