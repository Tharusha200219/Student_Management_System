import express from "express";
import cors from "cors";  // Import the cors module
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import StudentManagementRoute from "./routes/Student_Management_route.js";  

const app = express();

//Middleware to parse JSON bodies
app.use(express.json());

//Enable CORS
app.use(cors());  // Use the cors middleware

//Default route
app.get('/', (request, response) => {
    return response.status(200).send('Welcome to MERN tutorial');
});

//Routes
app.use('/StudentManagements', StudentManagementRoute);  

//Connect to MongoDB and start the server
mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening on port: ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
