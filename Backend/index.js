import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
console.log(process.env.LOCAL_URL)
app.use(cors({
    origin : [process.env.LOCAL_URL],
    methods : ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}));
app.use(express.json());



const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
const dab = async () => {
    try {
        const data = await mongoose.connect(URI);
        console.log(`Connected to ${data.connection.host}`);
    } catch (error) {
        console.log("Error: ", error);
    }
}
dab();

app.get('/home', (req, res) => {
    res.send('this is home');
  });

  

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});