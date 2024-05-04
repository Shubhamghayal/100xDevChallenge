const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://admin:1234567890@cluster0.jhdxqmj.mongodb.net/todos")
const todoSchema=mongoose.Schema({
tittle:String,
description:String,
completed:Boolean,
})

const todo= mongoose.model('todos',todoSchema);

module.exports={
    todo
}
