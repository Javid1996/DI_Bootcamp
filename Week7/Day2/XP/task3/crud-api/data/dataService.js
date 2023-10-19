const url = "https://jsonplaceholder.typicode.com/posts";

// import axios, {isCancel, AxiosError} from 'axios';
import axios from 'axios';

//  let data = function fetchPosts(){
//     axios.get('url')
//     .then(function (response) {
      
//       console.log(response);
//     })
//     .catch(function (error) {
      
//       console.log(error);
//     })
//     .finally(function () {
      
//     });
// }

// !!! solution
async function fetchPosts() {/*  async olmali ki await islesin  */
  try {/*  error cixarsa ne geldiyini gormek ucun try catch */
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  } catch (error) {
    throw error; /* error versin deye */
  }
}
// !!!


module.exports = fetchPosts;