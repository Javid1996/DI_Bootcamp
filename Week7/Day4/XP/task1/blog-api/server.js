const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.json());
const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'neapolneapol1',
        database: 'Week7',
        port: 5432
    }
});

app.set("db", db);

app.listen(3001, () => console.log('Example app listening on port 3001!'));


app.get('/', (req, res) => {
    db
    .select().from('posts')
    .then(post =>
            res.send(post)
    )

});


app.get('/:id', (req, res) => {
    
    const id =Number(req.params.id);
    db
    .select().from('posts')
    .where('id', id)
    .then(post =>
        res.send(post)
    );

});


app.post('/',(req,res)=>{
    const newPost = {
        title: req.body.title,
        content: req.body.content
      };

    db('posts')
    // .returning(['id','req.body.title'])
    .insert({title: req.body.title,content:req.body.content},['*'])
    .then(post=>
        res.send(post)
        )

})

app.put('/:id',(req,res)=>{
    
    const id = Number(req.params.id);
    db('posts')
    .where('id',id)
    .update({title:req.body.title,content:req.body.content},['*'])
    .then(post=>
        res.send(post)
        )
})


app.delete('/:id',(req,res)=>{
    const id = Number(req.params.id);
    db('posts')
    .where('id',id)
    .del()
    .then(post=>
        res.json(post)
        )
})
