const express = require('express');
const postsBL = require('../models/postsBL');

const router = express.Router();


router.route('/:id')
    .post(async function(req , resp){
        let userId = req.params.id;
        let postObj = req.body;
        return resp.json(await postsBL.createPost(userId , postObj))
    })



module.exports = router;
