// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  let ObjToStringByJson = JSON.stringify(marioGame);
  console.log(ObjToStringByJson);
  
  let jsonToObj = JSON.parse(ObjToStringByJson);
  console.log(jsonToObj);

  let prettyPrintObjToJson= JSON.stringify(marioGame,null,3);
  console.log(prettyPrintObjToJson);

  let prettyPrintJsonToObj = JSON.parse(prettyPrintObjToJson);
  console.log(prettyPrintJsonToObj);