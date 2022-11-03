const express = require('express');
const User = require('../models/user.model');
const router = new express.Router();

// Create user
router.post('/user/', async(req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({error: 'Something went wrong. Please try again later.'});
    }
});

// User Login
router.post('/user/login', async(req, res) => {

});

// User Logout
router.post('/user/logout', async(req, res) => {

});

// Fetch User Id
router.get('/user/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(404).send({error: 'Not found'});
    }

});

// Update User
router.patch('/user/:id', async(req, res) => {
    // Preventing a non-created field to be updated
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid update: You can only update a valid field.' });
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        user.save();
        res.send(user);

        if(!user) {
            return res.status(404).send();
        }
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
    
});

// Delete User
router.delete('/user/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user) {
            return res.status(404).send();
        }
        res.send(user);

    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;