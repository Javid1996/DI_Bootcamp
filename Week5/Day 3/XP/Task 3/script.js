const promise1 = Promise.resolve(3);

promise1.then((value) => {
  console.log(value);
  
});

const reject1 = Promise.reject('Boo!');

reject1.catch((value) => {
    console.log(value);
});

        