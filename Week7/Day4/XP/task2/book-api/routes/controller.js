const express = require('express');
const app = express();

app.use(express.json());


const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'neapolneapol1',
        database: 'Week7',
        port: 5432
    }
});

app.set("db", db);


const getAllBooks = (req, res) => {
    db
    .select().from('books')
    .then(item =>
            res.send(item)
    )

};

const getBookById = (req, res) => {
    
    const id =Number(req.params.bookId);
    console.log(req.params);
    db
    .select().from('books')
    .where('id', id)
    .then(item =>
        res.send(item)
    );

};

const postBookById = (req,res)=>{
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        year : req.body.published_year
      };
      if (!newBook){
        return res.status(404).send('Book not found')
      }
    db('books')
    .insert({title: req.body.title,author:req.body.author,year:req.body.published_year},['*'])
    .then(item=>
        res.send(item)
        )

};

module.exports = {
    getAllBooks,
    getBookById,
    postBookById
}