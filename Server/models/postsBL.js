const Users = require('../models/userModel');


exports.createNewPost = function(id , postObj){
    return new Peomise ((resolve , reject)=>{
        Users.findById(id , function(err, data){
            if(err){reject(err)}
            else{
                data.posts.push(postObj);
                data.save((err , data)=>{
                    (err) ? reject(err) : resolve(users.posts[user.posts.length -1]);
                })
            }
        })
    })
}