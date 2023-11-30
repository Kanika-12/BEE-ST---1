const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
title:{type : String , required :true},
    
    content:{type : String , required :true},
    description:{type:String , required : true},
    author:{type : String , required :true},
    
    tags:{type : String , required :true},
    comments:{type : String , required :true},
});
module.exports=new mongoose.model("books",bookSchema);