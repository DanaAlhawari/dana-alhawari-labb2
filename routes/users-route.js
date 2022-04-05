const express = require('express');
const router = express.Router();
const User = require('../model/users');

router.post('/users', (req, res) => {
   // console.log(rep.body)
   // body = { "threadId": req.params.threadId, "replyId": req.params.replyId }
    res.set('Content-Type', 'application/json');
    let user = new User(req.body)
   user.save()
        res.status(201).json(req.body);
    
})
//Hämtar user
router.get("/users/:id", (req, res) => {
    let user;
    try {
        user = User.findById(req.params.id)
    } catch (e) {
        res.status(400).send("Bad request")
    }
    if (user) {
        console.log(user)
        res.status(200).json(user)
    } else {
        res.status(404).send("Note found")
    }
})
//delete user 
router.delete("/users/:id", (req, res) => {
    try {
        User.deleteOne({ _id: req.params.id });
    } catch (e) {
        res.status(400).send("Bad request");
    }
    res.status(200).end();
})