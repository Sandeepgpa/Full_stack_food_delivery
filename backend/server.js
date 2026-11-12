import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./config/db.js";
import dns from "dns";
import foodRouter from "./routes/foodRoute.js";

dotenv.config();

// express config
const app = express();
const PORT = process.env.PORT;

dns.setServers(["1.1.1.1", "8.8.8.8"]);

//CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:["Content-type","Authorization"],
    optionsSuccessStatus:200
}));

//middlwear
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Database Connection
connectdb();

// API endpoints  
app.use("/api/food" ,foodRouter)
app.use("/images",express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
