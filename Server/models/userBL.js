const Users = require('../models/userModel');

exports.getAllUsers = function (){
    return new Promise ((resolve , reject) =>{
        Users.find({} , function(err , data){
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}


exports.getUser = function (id){
    return new Promise ((resolve , reject) =>{
        Users.findById(id , function(err , data){
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}

exports.addUser = function(obj){
    return new Promise((resolve, reject) =>{
        let user = new Users({
            name : obj.name,
            email : obj.email,
            street: obj.street,
            city: obj.city,
            zipcode : obj.zipcode,
            todos : obj.todos,
            posts : obj.posts
        });
            user.save(function(err){
                if(err){
                    reject(err)
                }else{
                    resolve('Created!')
                }
            })
    })
}

exports.updateUser = function(id , obj){
    return new Promise((resolve , reject)=>{
        Users.findByIdAndUpdate(id , {
            name : obj.name,
            email : obj.email,
            street: obj.street,
            city: obj.city,
            zipcode : obj.zipcode,
            todos : obj.todos,
            posts : obj.posts
        }, function(err){
            if(err){reject(err)}
            else{resolve("Updated!")}
        });

    })
}

exports.deleteUser = function(id){
    return new Promise((resolve , reject) => {
        Users.findByIdAndDelete(id , function(err){
            if(err){
                reject(err)
            }else{
                resolve('Deleted!')
            }
        })
    })
}