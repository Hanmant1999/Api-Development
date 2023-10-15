require('dotenv').config();
const express = require('express');
const app = new express();
const bookRouter = require("./routes/book");

const PORT = 8080 ;
app.use("/api/books", bookRouter);
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


