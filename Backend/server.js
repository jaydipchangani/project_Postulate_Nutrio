const express =require('express')
const mysql = require('mysql')
const cors = require('cors')

const app= express()
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database: "nutrio"
})

app.post('./form', (req,res)=>
{
    const sql="INSERT INTO form (`name`, `mobile`, `address`, `city`, `state`) Values (?)";
    const values=[
        req.body.name,
        req.body.mobile,
        req.body.address,
        req.body.city,
        req.body.state,

    ]

    db.query(sql, [values], (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })

})

app.listen(8081,()=>{
    console.log("Listning brother");
})