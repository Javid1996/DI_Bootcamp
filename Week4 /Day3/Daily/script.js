const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];


let getCarHonda = inventory.filter((car) => {return car.car_make=='Honda'});
 
let getFirstHonda = getCarHonda.map((car) => { return `This is a car ${car.car_make} ${car.car_model} ${car.car_year} `});

 console.log(getFirstHonda[0]);
 



 let sortCarInventoryByYear = (carInventory) =>{
    return carInventory.sort((a,b) =>{return a.car_year - b.car_year })
 }
 console.log(sortCarInventoryByYear(inventory));




// getCarHonda(inventory)

//  console.log(getCarHonda);