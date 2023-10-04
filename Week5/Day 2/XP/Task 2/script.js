let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
      
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { 
     
      console.log(xhr.response); /* data obyektine kec */
    }
  };

  xhr.onerror = function() {
    console.log("Request failed");
  };