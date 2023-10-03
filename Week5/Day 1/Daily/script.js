let name = document.getElementById('name');
let lastname= document.getElementById('lastname');
let submit = document.getElementById('btn');
let obj = {};
let div = document.querySelector('div');
submit.addEventListener("click",(e) => {

    e.preventDefault();
console.log(name.value);
console.log(lastname.value);
obj = {name : name.value, lastname: lastname.value };
let objToJson = JSON.stringify(obj);
let p = document.createElement('p');
p.textContent = objToJson;
div.append(p);

});








