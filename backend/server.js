import express from "express";
import connectDB from "./lib/config/db.js";
import router from "./routes/index.js";
import morgan from "morgan";

const app = express();
connectDB()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api', router)


// quick feature release bulk email campaign
app.get('/api/ctg-release', (req, res) => {
    
})



app.get("/", (req, res) => res.send("api hit"));

const port = process.env.PORT || 4222;

app.listen(port, console.log("app running on port " + port));
 