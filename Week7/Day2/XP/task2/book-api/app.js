const express = require('express');
const app = express();



let books = [
    {id:1 , title:"Book1", author:"a1", publishedYear:"y1" },
    {id:2 , title:"Book2", author:"a2", publishedYear:"y2"},
    {id:3 , title:"Book3", author:"a3", publishedYear:"y3"},
    
]


app.listen(3500, () => {
console.log("server is running on port 3500");
});


app.get("/api/books", (req, res) => {
    res.json(books);
});



// app.use();
app.get("/api/books/:bookID", (req, res) => {
    const id = Number(req.params.bookID);
    const book = books.find((item) =>{ 
      return item.id === id
   });
    if(!book){
      return res.status(404).send("“Book not found”")
    }
    console.log(book);
    res.status(200).json(book);
});

  

app.use(express.json());
app.post("/api/books", (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,  //"Book4",
      author: req.body.author, //"a4",
      publishedYear : req.body.publishedYear //"y4"
    };
    books.push(newBook);
    // res.status(201).json(newBook));
     res.status(201).json(newBook);
  });
