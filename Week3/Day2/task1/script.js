// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

let article = document.getElementsByTagName('article')[0];
console.log(article);
let pLast = article.lastElementChild;

console.log(pLast);

article.removeChild(pLast);


// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener("click",backgroundToRed);

function backgroundToRed(e){
    e.target.style.background ='red';
}


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).



let h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener("click",hideTheElement);

function hideTheElement(e){
    e.target.style.display = 'none';
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.


let btn = document.getElementById("btn");
btn.addEventListener("click", makeBoldAllItems);

function makeBoldAllItems(){
    // article.style.fontWeight="bold"
    let pList = document.getElementsByTagName("p");
    for(let p of pList){
        p.style.fontWeight="bold";
    }
}