// var mysql=require('mysql');

// import { Console } from "console";

// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     port:"3306",
//     password:"subbu-moni-2001",
//     database:"tourwebsite"

// });
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

console.log("hello world")
console.log("hello ")
 const express =require("express");
 const app=express();
 const port=3001;

 app.get('/',(req,res)=>{
    res.send('subbu-moni');
 })

 app.listen(port,()=>{
    console.log("port is running",`${port}`)

 })