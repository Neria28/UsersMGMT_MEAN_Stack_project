const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
        title: { type: String, require: true },
        completed: { type : Boolean, requires: false, default: false }
})

const postsSchema = new mongoose.Schema({
        title: { type: String, require: true },
        body: { type: String, require: false }
})


const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        street: { type: String, required: false, default: "" },
        city: { type: String, required: false, default: "" },
        zipcode: { type: Number, required: false, default: 0 },
        todos: [{ type: todosSchema, required: false }],
        posts: [{ type: postsSchema, required: false }]

});


module.exports = mongoose.model('user', userSchema)