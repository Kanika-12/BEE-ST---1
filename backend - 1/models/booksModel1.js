const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({

    content:{type : String , required :true},
    
    author:{type : String , required :true},
    

    createdAt:{type : Date , required :true},
});
module.exports=new mongoose.model("books",CommentSchema);