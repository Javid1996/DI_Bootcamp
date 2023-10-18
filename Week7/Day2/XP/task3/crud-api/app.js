const express = require('express')
const app = express()

const data = require('./data/dataService');
const { default: axios } = require('axios');

app.listen(3010, () => {
    console.log('server is listening on port 3010')
});

axios.get("/") 
.then(function(response) {
    console.log(response.data);
})
.catch(function (error) {
      
    console.log(error);
  });