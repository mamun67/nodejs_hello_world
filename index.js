var express=require("express");
var app=express();
var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/User").then(()=>{
    console.log("mongodb connected");
},(err)=>{
    console.log(err);
})

var routeRouter = require("./routes/route1.js");

app.use("/user", routeRouter);

app.get("/",(req,res,next)=>{
    res.send("Hello World new another change");
})
app.listen(3000,()=>{
    console.log("server started at 3000");
})