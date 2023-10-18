const express = require('express');
const app = express();

const route = require("./routes/todos.js")

app.listen(2500, () => {
    console.log('server is running on port 2500')
})

app.use(express.json())
app.use('/todos', route)