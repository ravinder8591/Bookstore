import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from 'nodemailer';
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

// code by mridul

import  fs  from 'fs'

const readDatabase = (Database) => {
    if(!fs.existsSync(Database)){
        fs.writeFileSync(Database,JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(Database,'utf-8'))
}

const writeDatabase = (Database , Data)=>{
    fs.writeFileSync(Database,JSON.stringify(Data,null,2))
}
const QueryFile = './Query.json'



const GetQuery = function(req, res) {
    console.log("Entered");
    const database = readDatabase(QueryFile);  // Assuming this reads the database
    
    let questionFound = false; // Flag to check if the question is found
    
    for (let i = 0; i < database.length; i++) {
        if (database[i].Question === req.body.Question) {
            // Increment the asked frequency if the question is found
            database[i].AskedFreq += 1;
            
            // Write the updated database back
            writeDatabase(QueryFile, database);
            
            // Return the answer for the matched question
            return res.status(200).json({
                answer: database[i].Answer
            });
        }
    }
    
    // If question was not found, return the default message
    res.status(200).json({
        answer: "Sorry! I am unable to get your answer. Please go to the Contact Form."
    });
};

const GetSamples = function(req,res){
    console.log("Enterd")
    const database = readDatabase(QueryFile);
    let arr = []
    for(let i = 0 ; i < database.length ;i++){
        if((database[i].Question.toLowerCase()).includes(req.params.que.toLowerCase())){
            arr.push(database[i]);
        }
    }
    arr.sort((a, b) => b.AskedFreq - a.AskedFreq);
    return res.status(200).json({
        examples : arr.splice(0,5)
    })
}


app.post("/query",GetQuery);
app.post("/example/:que",GetSamples);

const sendEmail = async (req, res) => {
    const { name, rollNo, contactNo, emailId , qu } = req.body;

    // Validate incoming data
    if (!name || !rollNo || !contactNo || !emailId || !qu) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ravindersingh5382@gmail.com", // Your Gmail address
                pass: "lurb vrsk ktgl jecd", // Your email password or app password
            },
        });

        // Mail options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "ravinder2144.be22@chitkara.edu.in",
            subject: "New Student Submission",
            html: `
                <h1>New Student Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Roll No:</strong> ${rollNo}</p>
                <p><strong>Contact No:</strong> ${contactNo}</p>
                <p><strong>Email ID:</strong> ${emailId}</p>
                <p><strong>Question</strong> ${qu}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email." });
    }
};

// Define the route for the email handler
app.post("/send-email", sendEmail);












// till here 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});