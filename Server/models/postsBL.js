const Users = require('../models/userModel');

exports.createPost = function(id , postObj){
    return new Promise ((resolve , reject)=>{
        Users.findById(id , function(err, data){
            if(err){reject(err)}
            else{
                data.posts.push(postObj);
                data.save((err , data)=>{
                    (err) ? reject(err) : resolve("Post has Created");
                })
            }
        })
    })
}





