const express = require("express");

const router = express.Router();

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
];



/* router.get("/",(req,res)=>{
    res.send("Hello World");
});
*/

// to get all the books 
router.get("/",(req,res)=>{
    res.send(books);
})

// to get one books depennds on the id 
router.get("/:id",(req,res)=>{
    const id  = req.params.id;
    res.send(books[id-1]);
});

router.post("/",(req,res)=>{
    const reqbook = req.body;
    id = books.length+1;
    books.push({
        ...reqbook,
        id
    });
    res.send("book created successfully");

});

router.put("/:id",(req,res)=>{
   const params = req.params;
   console.log(params);
})

module.exports = router;
