const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


    let section = document.getElementById('section')

function getACard(obj){
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = obj.image;
    let p1Name = document.createElement('p');
    let p2Mail = document.createElement('p');
    p1Name.textContent=obj.name;
    p2Mail.textContent=obj.email;

    div.append(img);
    div.append(p1Name);
    div.append(p2Mail);
    section.append(div);
    
    
    div.className="robo_block";
    img.className="imgClass";
    p1Name.className='robo_name';
    p2Mail.className='robo_mail';


    

};

// getACard(robots[1]);
// getACard(robots[2]);
// getACard(robots[3]);

///////////////////////

function displayRobots(arr){
    arr.map((i) => {

        getACard(i);

});
};

displayRobots(robots);



var x = document.getElementById("search");
x.addEventListener('keyup',(e)   =>{
   let inputValue = e.target.value.toLowerCase();

    let foundRobot = robots.filter((i)=> {
        let iName= i.name.toLowerCase();
       
        return iName.includes(inputValue)
       
    });
    console.log(foundRobot);
    section.innerHTML="";
    // foundRobot.map((i) =>{
    //     getACard(i)
    // });
    displayRobots(foundRobot);
    // getAllRobots(found);

    } );














    // let rb =
    //         document.getElementsByClassName("robo_block");
 
    //     robots.forEach((i) => {
            
    //         // let p = document.createElement("p"),
    //         // p.innerText = robots[i] ;
    //         // p.appendChild(i)
    //         console.log(i);

    //         const{name:n,email:m}=i;

    //         console.log(n);
    //         console.log(m);

    //         let roboName = document.getElementsByClassName('name');
    //         roboName.innerHTML=n
            
    //         let roboMail = document.getElementsByClassName('mail');
    //         roboMail.innerHTML=m;




            
    //     });

        