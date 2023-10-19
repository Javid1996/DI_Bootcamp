const express = require('express');
const app = express();

let array = [
    {id:1,title:'water',content:"thesis about water"},
    {id:2,title:'planet',content:"thesis about planet"},
    {id:3,title:'animals',content:"thesis about animals"}
];

app.listen(3000, () => {
    console.log("server is listening on port 3000");
  });

// 1
  app.get("/posts:", (req, res) => {
    /* : path de bu olmamali /posts*/
    res.json(array);
  });

//?????? 2
  app.get("/posts/:id:",(req,res)=>{
    const id = Number(req.params.id);
    const thesis = array.find((thesis)=>
       thesis.id===id  /* type problemine gore iki beraberlik == */
    );
    res.json(thesis);
  });

//  3 POST /posts: Create a new blog post.
  
  app.use(express.json());

  // !! boddyparser de istifade et

  app.post("/posts",(req,res)=>{
    const newThesis = {
      id: array.length + 1,
      title: "polusion",
      content: "thesis about polusion",
    };

    // !!! body ile isle 
    // !!! body olmazsa deye if statement de ver
    array.push(newThesis);
    res.status(201).json(newThesis);

  })

  app.get("/posts", (req, res) => {
    res.json(array);
  });
  // !!! niye iki dene eyni pathde get var olmamali


  // PUT /posts/:id: Update an existing blog post.
  app.use(express.json());
//  bir defe middleware parser kifayet edir

  app.put("/posts/:id",(req,res) =>{
    const id = Number(req.params.id);
    const index = array.findIndex(
      (thesis) => thesis.id === id
    ); /* 2 beraberlik islet type meselesine gore == */
    if (index === -1) {
      return res.status(404).send('Thesis not found');
    }
    const newThesisByPut = {
      id: array[index].id,
      title: 'req.body.title',
      content: 'req.body.content',
    };

    // !!! body ile isle
    // !!! body olmazsa deye if statement de ver
    array[3] = newThesisByPut;
    res.status(200).json('Product updated');
  }   );