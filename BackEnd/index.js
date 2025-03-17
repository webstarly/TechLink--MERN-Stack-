const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/dbconnect")

const router = require('./routes/route')

dotenv.config();

const app = express();


app.use(cors({
    origin :  process.env.FRONTEND_URL,
    credentials : true
}
));

app.use(express.json());

app.use("/api",router);


const PORT = process.env.PORT || 8080 ;

connectDb().then(() => {
    app.listen( PORT , ()=>{
        console.log(`Server running on port ${PORT}`),
        console.log("Connected to DB")
    });
});