const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello World");
});

// to get all the books 
router.get("/api/books",(req,res)=>{
    res.send(books);
})

// to get one books depennds on the id 
router.get("/api/books/:id",(req,res)=>{
    const id  = req.params.id;
    res.send(books[id-1]);
});

router.post("/api/books/",(req,res)=>{
    const reqbook = req.body;
    id = books.length+1;
    books.push({
        ...reqbook,
        id
    });
    res.send("book created successfully");

})

module.exports = router;
