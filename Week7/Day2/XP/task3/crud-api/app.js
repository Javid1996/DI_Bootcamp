const express = require('express')
const app = express()

const data = require('./data/dataService');
const { default: axios } = require('axios');/* burda ehtiyac yoxdur */

app.listen(3010, () => {
    console.log('server is listening on port 3010')
});

// axios.get("/")  /* req res yoxdur */
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function (error) {
      
//     console.log(error);
//   });

  // !!! solution
app.get('/', async (req, res) => {
  try {
    const posts = await data.fetchPosts(); /* file icerisinden bize lazim olani gotururuk */
    
    res.json(posts);
    console.log('Data retrieved and sent as response.');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal server error');
  }
});
// !!!