let button = document.getElementById('btn');
let textInput1 = document.getElementById('latitude1');
let textInput2 = document.getElementById('longitude1');
let textInput3 = document.getElementById('latitude2');
let textInput4 = document.getElementById('longitude2');

button.addEventListener('click',myFunction);




function myFunction(e){
    e.preventDefault()
let a = textInput1.value;
let b = textInput2.value;
let c = textInput3.value;
let d = textInput4.value;
console.log(a,b);
console.log(c,d)

data(a,b);
data(c,d);
  
}




const data = (a,b)=>{
//   return  await (await fetch(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}`).json())
  fetch(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results.sunrise);
    
  });

}