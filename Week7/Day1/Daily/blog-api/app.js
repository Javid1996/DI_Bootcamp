const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('server is running')
})

app.get('/api/posts', (req, res) => {
    res.json([
        { }
    ])
});