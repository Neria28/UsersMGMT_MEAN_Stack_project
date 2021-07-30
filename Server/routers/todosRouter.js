const express = require('express');
const todosBL = require('../models/todosBL');

const router = express.Router();

router.route('/:id')
    .get( async function(req,resp){
        let id = req.params.id;
        let res = await todosBL.getTodo(id);
        return resp.json(res);
})



router.route('/:id')
    .put(async function(req,resp){
        let todoId = req.params.id;
        let obj = req.body;

        var res = await todosBL.updateTodo(todoId,obj);
        return resp.json(res);
    })



module.exports = router;
