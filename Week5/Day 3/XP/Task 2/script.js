let temp = 15;

const prom = new Promise((resolve, reject) =>{
   

    setTimeout(() =>{
    if(temp>20){
        resolve('what a nice day');
    }else{
        reject('bad day');
    }
},4000)
});

prom.then(result => console.log(result))
.catch(error => console.log(error))
