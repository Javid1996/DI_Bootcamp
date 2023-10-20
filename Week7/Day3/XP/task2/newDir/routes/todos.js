const express = require('express')
const router = express.Router()

const todos = [
{id:1, item:'walk'},
{id:2, item:'run'},
{id:3, item:'lie'},
{id:4, item:'jump'},
];



router.get('/', (req,res)=>{
    res.json(todos)
})

router.post('/', (req, res) => {
    const newTodo = {
      id: todos.length + 1,
      item: req.body.item
    };
    if(!req.body){
      return res.status(404).send('item is apsent');
    }
    todos.push(newTodo);
    // res.status(201).json(newBook));
     res.status(201).json(newTodo);
  });


  router.use(express.json());
  // !!! app js serverde elave etmek daha uygun butun routelara kecerli olur

  router.put("/:id",(req,res) =>{
    const id = Number(req.params.id);
    const index = todos.findIndex((el) => el.id == id);
    if (index === -1) {
      return res.status(404).send("Thesis not found");
    }
    const newTodo = {
      id : array[index].id,
      item : req.body.item
      
    };
    todos[index] = newTodo;
    res.status(200).json("Todos updated")
  }   );


  router.delete('/:id', (req,res)=>{
    const id = Number(req.params.id);
    const index = todos.findIndex((el) => el.id==id);
    if (index === -1) {
        return res.status(404).send("Thesis not found");
    }
    todos.splice(index,1);
    res.status(200).json("todo deleted");
  });

module.exports = router

// !!!EXERCISE 3 TAMAMLANMAYIB