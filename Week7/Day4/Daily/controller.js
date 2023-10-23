const express = require('express');
const app = express();

const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;



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


const getAllUsers = (req, res) => {
    db
    .select().from('users')
    .then(item =>
            res.send(item)
    )

};

const getUserById = (req, res) => {
    
    const id =Number(req.params.id);
    
    db
    .select().from('users')
    .where('id', id)
    .then(item =>
        res.send(item)
    );

};

const registerUser = async (req,res)=>{
    
const hashPass = await bcrypt.hash(req.body.password,saltRounds).then(val=> val);
console.log(hashPass);
console.log(req.body.password);


        db('hashpwd2')
      .insert({username:req.body.username, password:hashPass},['*'])
      .then(item=> res.send(item));
      }
    
      

     const loginUser = (req,res) =>{
        console.log(req.body);
        const{user,pass} = req.body;
        db('hashpwd2')
        .select()
        .where({username:user})
        .then(post =>{
            if(post.length>0){ /* eger post varsa deye sert vermek daha uygun */
                if(bcrypt.compareSync(pass,post[0].password)) {
                   console.log(`Welcome ${post[0].username}`)
                    res.send(`Welcome ${post[0].username}`)
                } else{
                    res.send({message:'Wrong password'})  
                }      
            }
        });
    }

    const updateUserById = (req,res)=>{
    
        const id = Number(req.params.id);
        db('users')
        .where('id',id)
        .update({email:req.body.email,username:req.body.username,first_name:req.body.first_name,last_name:req.body.last_name},['*'])
        .then(post=>
            res.send(post)
            )
    }
    




module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById
}