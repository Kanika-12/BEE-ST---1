const express = require('express');
//invoke expresss
const app=express();

const bookRoute=require("./routes/booksRoutes")
require("./connection/conn");

app.use(express.json());
//route create
app.use("/api/v1/",bookRoute);

/*app.get("/services",(req,res) =>
{
    res.send("Service pagee");
});
app.get("/about",(req,res) =>
{
    res.send("about page");
});*/
app.listen(1001,() =>
{
    console.log("Server Started Successfully");
});