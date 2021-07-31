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
    .post(async function(req, resp){
        let userId = req.params.id
        let todoObj = req.body
        return resp.json(await todosBL.createTodo(userId , todoObj))
    })

router.route('/:id')
    .put(async function(req,resp){
        let todoId = req.params.id;
        let obj = req.body;

        let res = await todosBL.updateTodo(todoId,obj);
        return resp.json(res);
    })



module.exports = router;
