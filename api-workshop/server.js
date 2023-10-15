require('dotenv').config();
const express = require('express');
const app = new express();
const bookRouter = require("./routes/book");

const PORT = 8080 ;
app.listen(PORT,()=>{
    console.log(`server is running on port no. ${process.env.port}`);
});

const logger = (req,res,next)=>{
    console.log(`recieved the ${req.method} on ${req.url}`);
    // res.send(books);
    next();
};

app.use(logger);

const books = [
    {
        id:1,
        title: "Harry POTTER",
        AUTHOR:"j.k.rOWLING",
        year:1998,
        pages:251,
        publisher:"BloomSubry",
        language:"English"
    },
    {   
        id:2,
        title: "Harry Potter2",
        AUTHOR:"j.k.rOWLING",
        year:1998,
        pages:251,
        publisher:"BloomSubry",
        language:"English"
    },
    {   
        id:3,
        title: "Harry Potter 3",
        AUTHOR:"j.k.rOWLING",
        year:1998,
        pages:251,
        publisher:"BloomSubry",
        language:"English"
    }
]

app.use(express.json());

app.use(PORT, bookRouter);
