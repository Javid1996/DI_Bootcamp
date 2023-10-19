// const express = require('express');
// const app = express();




const express = require('express')
const app = express()
const router = require('./routes/controller.js')



app.use(express.json())
app.use('/', router);


app.listen(3005, () => {
    console.log('server is listening on port 3005')
})