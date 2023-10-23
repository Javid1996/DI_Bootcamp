const express = require('express');
const router = require('./router');
const app = express();
// const book_routes = require('./routes/router')



app.listen(3150, () => console.log('Example app listening on port 3150!'));
app.use(express.json());
// app.use('/api/books',book_routes)

app.use('/',router)

