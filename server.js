require('dotenv').config();
const express = require('express');
const app = new express();
const mongoose = require("mongoose");
const bookRouter = require("./routes/book");
const userRouter = require("./routes/users");

const PORT = 8080 ;
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
  });
app.use("/api/books", bookRouter);
app.use("api/users",userRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port no. ${8080}`);
});

const logger = (req,res,next)=>{
    console.log(`recieved the ${req.method} on ${req.url}`);
    // res.send(books);
    next();
};

app.use(logger);
app.use(express.json());


