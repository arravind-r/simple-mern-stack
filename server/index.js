import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("../client/index.js"));

// Body Parser
app.use(bodyParser.json());

// DB Config
const db = require('./.env').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(()=> console.log('MongoDB is successfully connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () =>
    console.log(`Server started on port: 5000`)
);