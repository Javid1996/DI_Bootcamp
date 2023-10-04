let gifName = document.getElementById('text');
let submit = document.getElementById('btn');
let reset = document.getElementById('resetBtn');
let div = document.getElementById('gif');
let data;
 
submit.addEventListener("click",(e) => {

    e.preventDefault();

    console.log(gifName.value);
   
    let gifX=gifName.value;
    const response = fetchData(gifX);
    console.log(response);

    // let img = document.createElement('img');
   

    // img.src = response.data.images.original.url;
    // div.append(img);

    let innerDiv = document.createElement('div');

    let img = document.createElement('img');
    img.src = response.images.original.url;

    let resetButton = document.createElement('input')
    resetButton.setAttribute("type", "reset");
    resetButton.setAttribute("value", "reset");

    innerDiv.append(img);
    innerDiv.append(resetButton);
    div.append(innerDiv);

    resetButton.addEventListener('click',(e) => {

        // e.target.div.remove(e.target); //e.target = innerDiv
        // // innerDiv.innerHTML= "";

        e.target.parentElement.remove()
        // !!! bu sekilde olmalidir 
    
    });


    //parent div -> child img ,child button 
    //e.target.parentelement
    //remove()

});

reset.addEventListener('click',(e) => {

    div.innerHTML= "";

});


function fetchData(x){
    let xhr = new XMLHttpRequest();

xhr.open('GET', `https://api.giphy.com/v1/gifs/random?q=${x}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
      
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { 
     
      data = xhr.response.data;

    }
  };

  xhr.onerror = function() {
    console.log("Request failed");
  };
  return data;
}