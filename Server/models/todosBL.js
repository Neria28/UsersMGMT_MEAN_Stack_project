const Users = require('../models/userModel');


exports.getTodo = function(id)
{
    return new Promise((resolve, reject) => {
        Users.findOne({'todos._id' : id}, (err , data)=>{
            if(err){reject(err)}
            else{resolve(data.todos.filter(x=> x._id == id))}
        })
    })
}

exports.createTodo = function(userId,todoObj){
    return new Promise((resolve,reject)=>{
        Users.findById(userId , (err , data)=>{
            if(err){
                reject(err);
            }else{
                data.todos.push(todoObj)
                data.save((err , data)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve("created")
                    }
                })
            }
        })
    })
}

exports.updateTodo = function(todoId,obj){
   return new Promise((resolve , reject)=>{
       Users.findOne({'todos._id' : todoId} , (err, data)=>{
           if(err){reject(err)}
           else{
            data.todos.id(todoId).set(obj);
            data.save((err)=>{
                (err) ? reject(err) : resolve(`todo - ${todoId} - updated`)
            })
           }
       })
   })
}

