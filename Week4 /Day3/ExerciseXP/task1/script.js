let input = document.getElementById('lettersInputId');

input.addEventListener('keypress', getOnlyLetters)


function getOnlyLetters(event){
    
   
    let keycode =  event.keyCode;
    
   
    if( keycode < 65 || keycode > 90 && keycode < 97 || keycode > 122){
       
        
        event.preventDefault();  
        return false;
    }
};  