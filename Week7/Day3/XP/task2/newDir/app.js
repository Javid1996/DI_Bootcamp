const express = require('express');
const app = express();

const route = require("./routes/todos.js")

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.use(express.json())
app.use('/todos', route)