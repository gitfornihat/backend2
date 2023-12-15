const express = require('express');
const app = express();
const sportswear = [
    {id:1, name:' tracksuits', say:50, customers:23},
    {id:2, name:'shorts',say:30, customers:58},
    {id:3, name:'T-shirts',say:40, customers:192},
    {id:4, name:'polo shirts',say:20, customers:83},
    {id:5, name:'gym bag',say:10, customers:117},
    {id:6, name:'water bottle',say:20, customers:63},
    {id:7, name:'gym shoes',say:150, customers:76},
    {id:8, name:'training socks',say:25, customers:94},
    {id:9, name:'gym leggings',say:80, customers:99},
    {id:10, name:'swimsuits', say:35, customers:112},
]
app.get('/', (req,res)=>{

    res.send("Home Page")
})

app.get('/sportswear', (req,res)=>{
   
    res.send(sportswear)
})
app.get('/sportswear/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = users.find(user=>user.id == userID)
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('İstifadəçi yoxdur')
    }
})

app.listen(5000, ()=>{
    console.log("Server istifadəyə hazırdır");
})
  