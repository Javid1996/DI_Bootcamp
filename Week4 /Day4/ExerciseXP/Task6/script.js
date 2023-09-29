// Create a class Animal with the attributes name, type and color. The type is the animal type,
//  for example: dog, cat, dolphin ect …


//  Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().
//   This method takes a parameter: the sound the animal makes,
//    and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, 
// a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white



class Animal { 
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color= color;
    }
    
  }


  class Mamal extends Animal{
    constructor(name,type,color,noise){
        super(name,type,color);
        this.noise=noise;

    }
    sound()
    {return `${this.name} ${this.color}, this.type` }
  }

  let cow = new Mamal('cow', 'mamal','white and black','mooooow');
  console.log(cow.sound());

  