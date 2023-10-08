

const randomButton = document.getElementById('random')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')
const idName = document.getElementById('idName');
let idNumber;
const idHeight = document.getElementById('idHeight')
const idWeight = document.getElementById('idWeight')
const idType = document.getElementById('idType')
const displayImg = document.getElementById('pokemon_img');
let pNumber;





randomButton.addEventListener('click',getRandomPokemon);
leftButton.addEventListener('click' , moveToLeft);
rightButton.addEventListener('click' , moveToRight);


async function getRandomPokemon(){
    idNumber = document.getElementById('idNumber')
   let num = getRandomNumber(1,30);
    const url1 = `https://pokeapi.co/api/v2/pokemon/${num}/?offset=0&limit=30/`;

    const response =  await fetch(url1);
    const jsonResponse = await response.json();
    const pokemonName = jsonResponse.name;
    
    const pokemonId = jsonResponse.id;
    const pokemonHeight = jsonResponse.height;
    const pokemonWeight = jsonResponse.weight;
    const pokemonTypes = jsonResponse.types[0];
    const objPokemonType = Object.values(pokemonTypes)[1]; 
    const pokemonType = Object.values(objPokemonType)[0]; 
    console.log(pokemonName);
    console.log(pokemonId);
    console.log(pokemonHeight);
    console.log(pokemonWeight);
    console.log(pokemonType);

    idName.innerText=pokemonName.toUpperCase();
    idNumber.innerText = "Pokemon id : " + "  " + pokemonId;
    idHeight.innerText = `Height : ${pokemonHeight} inches `;
    idWeight.innerText = `Weight : ${pokemonWeight} gr`;
    idType.innerText = `Type : ${pokemonType} `;

    const img = jsonResponse.sprites.front_default;
    console.log(img)
    // displayImg.innerText = img;
    displayImg.setAttribute('src', img);

    pNumber=pokemonId;
    console.log('PNUMBER FUNC',pNumber);

    
    
    
    
}  


function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}



 async function moveToLeft(){

    console.log( 'idnumber :', pNumber);

     

    
    const url1 = `https://pokeapi.co/api/v2/pokemon/${--pNumber}/?offset=0&limit=30/`;
    const response =  await fetch(url1);
    const jsonResponse = await response.json();
    const pokemonName = jsonResponse.name;
    
    const pokemonId = jsonResponse.id;
    const pokemonHeight = jsonResponse.height;
    const pokemonWeight = jsonResponse.weight;
    const pokemonTypes = jsonResponse.types[0];
    const objPokemonType = Object.values(pokemonTypes)[1]; 
    const pokemonType = Object.values(objPokemonType)[0]; 
    console.log(pokemonName);
    console.log(pokemonId);
    console.log(pokemonHeight);
    console.log(pokemonWeight);
    console.log(pokemonType);

    idName.innerText=pokemonName.toUpperCase();
    idNumber.innerText = "Pokemon id : " + "  " + pokemonId;
    idHeight.innerText = `Height : ${pokemonHeight} inches `;
    idWeight.innerText = `Weight : ${pokemonWeight} gr`;
    idType.innerText = `Type : ${pokemonType} `;

    const img = jsonResponse.sprites.front_default;
    console.log(img)
    
    displayImg.setAttribute('src', img);

    
 }

 async function moveToRight(){

    console.log( 'idnumber :', pNumber);

     

    
    const url1 = `https://pokeapi.co/api/v2/pokemon/${++pNumber}/?offset=0&limit=30/`;
    const response =  await fetch(url1);
    const jsonResponse = await response.json();
    const pokemonName = jsonResponse.name;
    
    const pokemonId = jsonResponse.id;
    const pokemonHeight = jsonResponse.height;
    const pokemonWeight = jsonResponse.weight;
    const pokemonTypes = jsonResponse.types[0];
    const objPokemonType = Object.values(pokemonTypes)[1]; 
    const pokemonType = Object.values(objPokemonType)[0]; 
    console.log(pokemonName);
    console.log(pokemonId);
    console.log(pokemonHeight);
    console.log(pokemonWeight);
    console.log(pokemonType);

    idName.innerText=pokemonName.toUpperCase();
    idNumber.innerText = "Pokemon id : " + "  " + pokemonId;
    idHeight.innerText = `Height : ${pokemonHeight} inches `;
    idWeight.innerText = `Weight : ${pokemonWeight} gr`;
    idType.innerText = `Type : ${pokemonType} `;

    const img = jsonResponse.sprites.front_default;
    console.log(img)
    
    displayImg.setAttribute('src', img);

    
 }




//     const data = jsonResponse.results;
//     console.log(data);
//     const pokemon = data.url;
//     let pokemonArray = Object.entries(data)
//     console.log(pokemonArray);
// }








   




// for(i=1; i<30; i++){
//     const url1 = `https://pokeapi.co/api/v2/pokemon/${i}/?offset=1&limit=30/`

//     const response =  await fetch(url1);
//     const jsonResponse = await response.json();
//     const name = jsonResponse.name;
//     console.log(name)

// }