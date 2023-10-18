const express = require('express');
const app = express();

const time = [{date:"18/10/2023",time:"12:00"}]
// const indexRouter = require('./routes/index.js');
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

app.use( "/date" ,(req, res, next) =>{

    console.log("today's date and the current time ")
    next();
});

app.get("/time",(req,res,next) =>{
    console.log("/time");
    res.send("time");
    next();
});


app.get("/date",(req,res,next)=>{
console.log("/date");
    res.json(time[0].date);
})



