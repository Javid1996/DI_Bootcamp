
// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions



let redDiv = document.getElementById('animate');


let pos = 0;
function myMove (){
   const intervalId =  setInterval(function() {
        pos++
            redDiv.style.left = pos + "px";
        
            if (pos == 350) {
                clearInterval(intervalId);
            }
       
        }, 1);
}

function stopMove(){

}
