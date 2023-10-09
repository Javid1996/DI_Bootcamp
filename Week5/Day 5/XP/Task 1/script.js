let button = document.getElementById('btn');
let peopleNames = document.getElementById('name');
let peopleHeight = document.getElementById('height');
let peopleGender = document.getElementById('gender');
let peopleBirth = document.getElementById('birth');
let peoplePlanet= document.getElementById('planet');
let container = document.getElementById('container');



// const url = "https://www.swapi.tech/api/people/1";
const url1 = "https://www.swapi.tech/api/people/";

// const urlPlanet = "https://www.swapi.tech/api/planets/1/";

async function fetchPeople(){
    const response = await fetch(url1);
    const data =  await response.json();
    const peopleArray = data.results;
    const randomPeople = getRandomIndex(peopleArray);
    const randomPeopleUrl = randomPeople.url;
    fetchFunction(randomPeopleUrl)
}

function getRandomIndex(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}



async function fetchFunction(url){
try{
 const response = await fetch(url)
//  console.log ('response' ,response)
const data = await response.json()
// console.log("data",data)
const properties = await data.result.properties

console.log(properties.name);
console.log(properties.height);
console.log(properties.gender);
console.log(properties.birth_year);
const urlPlanet = properties.homeworld;

const planet = await fetchForPlanets(urlPlanet);

peopleGender.innerHTML = '';
// peopleNames.append(properties.name);
// peopleHeight.append(properties.height);
// peopleGender.append(properties.gender);
// peopleBirth.append(properties.birth_year);

peopleNames.innerText= `Name : ${properties.name}`;
peopleHeight.innerHTML=`Height : ${properties.height}`;
peopleGender.innerHTML=`Gender : ${properties.gender}`;
peopleBirth.innerHTML=`Birth Date : ${properties.birth_year}`;
peoplePlanet.innerHTML = `Home World : ${planet}`;


// peoplePlanet.append(planet)
// console.log(planet)


} catch(error){
 console.log("Oh no! That person is not available")
}

}

async function fetchForPlanets(urlPlanet){
      const response = await fetch(urlPlanet)
    // console.log("1 planet")
     const data = await response.json()
     const planetName = data.result.properties.name;
     return planetName;
    //  console.log(planetName) ;
    //  const planet = await data.result.name
    //  peoplePlanet.append(planetName)
    //  peoplePlanet.innerHTML=`Home World : ${peoplePlanet}`
}

function loading(){
    
    peopleNames.innerHTML = "";
    peopleHeight.innerHTML ='';
    peopleGender.innerHTML ='<i class="fa-solid fa-cog fa-spin"></i>';
    peopleBirth.innerHTML ='';
    peoplePlanet.innerHTML ='';
    // container.innerHTML = 


    
}


button.addEventListener("click" , start)

function start(){
    loading();
    
    fetchPeople();
}
// fetchFunction();
// fetchForPlanets();
