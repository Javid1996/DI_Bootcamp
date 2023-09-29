
function displayStudentInfo(objUser){
    
    // for(let [first,last] of Object.values(objUser) );
    // console.log(`Your full name is ${first} ${last} `)
    // // Your full name is Elie Schoppik

    const { first: f, last: l } = objUser;
    console.log(`Your full name is ${f} ${l}  `)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});