const express = require('express');
const app = express();
const book_routes = require('./routes/router')



app.listen(3050, () => console.log('Example app listening on port 3050!'));
app.use(express.json());

app.use('/api/books',book_routes)

