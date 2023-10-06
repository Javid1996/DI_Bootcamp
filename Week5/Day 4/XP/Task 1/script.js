const fetchUrl ="https://www.swapi.tech/api/starships/9/"
    // .then(response => response.json())
    // .then(objectStarWars => console.log(objectStarWars.result));


   async function thenToAwait() {
       const response = await fetch(fetchUrl);
       console.log(response);
       let jsonData = await response.json();
       console.log(jsonData);

     }

     thenToAwait();