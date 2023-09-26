

const makeJuice = (size) => {
    const ingredients= [];
    const addIngredients = (first,second,third) => {
        let x =`The client wants a ${size} juice, containing ${first}, ${second} and ${third} .`
        ingredients.push(first,second,third);

        const displayJuice = () => {
            let paragraph = document.getElementById('juice');
            paragraph.append(x);

        }
        displayJuice();
    }  

    
    addIngredients("juice","ice","viski");
    addIngredients("juice","ice","viski");
}

makeJuice('large');