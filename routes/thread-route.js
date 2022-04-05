const express = require('express');
const router = express.Router()
const Thread = require('../model/thread');
//const Reply = require('../model/replies');
//const Likes = require('../model/like');

// Hämta all tråder **klar**
router.get('/', async(req, res) => {
    try {
        const threads = await Thread.find()
        res.json(threads)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
//Lägger till en tråd
router.post('/', async(req, res) => {
    const thread = new Thread({
        rubrik: req.body.rubrik,
        svar: req.body.svar,
        like: req.body.like
    })
    try {
        const newThread = await thread.save()

    
        res.status(201).json(newThread)
       // return;
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
})
//Hämtar en specifik tråd **klar**
router.get('/:id', async(req, res) => {
    try {
        const threads = await Thread.findById(req.params.id)
        res.json(threads)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

//Hämtar svar för en tråd  **klar**
router.get('/:id/replies', async(req, res) => {
   try {
        const threads = await Thread.findById(req.params.id)
        res.json(threads.svar)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
//Lägger till ett svar i en tråd
router.post('/:id/replies', async(req, res) => {
    const thread = await Thread.findById(req.params.id)
    thread = newThread({
        svar: req.body.svar
    })
    try {
        const newThread = await thread.save()
        res.status(201).json(newThread)
    } catch (err) {
        res.status(400).json({ message: err.message })

    }

})
//Lägger till en like till ett svar
router.post('/:id/replies/:id/like', (req, res) => {
    console.log('lägg like');
})
//Tar bort en like till ett svar ???
router.delete('/:id/replies/:id/like',  (req, res) => {
   // const thread =  Thread.findById(req.params.id)
    const thread = thread.remove({_id : req.params.like})
    try {
        res.json(thread);
        res.json({ message: 'Deleted like till ett svar'});
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})
//Ta bort en post by id  
router.delete('/:id' , async(req, res) => {
    try {
        await Thread.findById(req.params.id).deleteOne();
        res.json({ message: 'Deleted post'});
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})
async function getThread(req, res,next) {
    let thread;
    try {
        thread = await thread.findById(req.params.id);
        if (thread == null) {
            return res.status(404).json({ message: 'Cannot find thread' })
        }
    } catch (err) {
            return res.status(500).json({ message:err.message})
        }
    res.thread = thread
    next()
    }

 module.exports = router;