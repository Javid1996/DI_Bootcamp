const url = "https://jsonplaceholder.typicode.com/posts";

// import axios, {isCancel, AxiosError} from 'axios';
import axios from 'axios';

 let data = function fetchPosts(){
    axios.get('url')
    .then(function (response) {
      
      console.log(response);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
      
    });
}


module.exports = data;