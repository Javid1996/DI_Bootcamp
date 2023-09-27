const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//    Create an array using forEach that contains all the usernames from the gameInfo array, 
//    add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = getUsername(gameInfo);
// console.log(usernames)

// function getUsername(array){
    const usernames=[];
    let container = 0;
    gameInfo.forEach((item,index) => { console.log(item,index)
        item.score > 5 ? usernames.push(item.username) : " ";   // 2
        container += item.score;

    });
    console.log( ` The total score is ${container}`)
    console.log (usernames);
// }


