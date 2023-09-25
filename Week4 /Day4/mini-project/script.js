let isMousedown=false;
let clearButton = document.getElementsByClassName('btn')[0];
let sideBar = document.getElementById('side_bar');
let colorBlocks = document.getElementsByClassName('side_block');
console.log(colorBlocks);
let main = document.querySelector('main');
let siteContent = document.getElementsByClassName('site_content');
let fillDivArray = document.querySelectorAll('main > div');
let color;
console.log(fillDivArray);

for (let colorBlock of colorBlocks){

    colorBlock.addEventListener('click', getColorBarValue)

}

for (let fillDiv of fillDivArray){

    fillDiv.addEventListener('mousedown', setColorValue )
   
    fillDiv.addEventListener('mouseover', allowOver )
    
    fillDiv.addEventListener("mouseup", stopFillingColor)
    
}



function getColorBarValue(event){

    
    color = event.target.classList[1];
    console.log(color);
    
}

function setColorValue(event){
    event.target.style.background = `${color}` 
    isMousedown=true;
}
    



clearButton.addEventListener('click',clearAll )

function clearAll(){
    console.log('asdfghj');
    for(let i of fillDivArray){
        console.log(i);
        i.style.background='white'
    }
}




function allowOver(event){
    if(!isMousedown){return}
    event.target.style.background = `${color}`

}

function stopFillingColor(){
    isMousedown=false
}


// main.addEventListener('mousedown' ,allowMouseDown)

// function allowMouseDown(){
//     for(let i of fillDivArray){

//     }
// }


// colorBlocks.addEventListener('click', getColorBarValue)
// color = 


