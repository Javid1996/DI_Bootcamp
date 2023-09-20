// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = ["Planet1","Planet2","Planet3","Planet4","Planet5","Planet6","Planet7","Planet8","Planet9"]


for(let i in planets){
    let planet = document.createElement('div');
    // planet.className = "planet"
    planet.classList.add="planet";
    let sectionPart = document.querySelector(".listPlanets");
    sectionPart.appendChild(planet);
}



