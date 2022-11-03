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
        console.log(error.message)
        res.status(404).send({error: 'Not found'});
    }

});

// Update User
router.patch('/user/me', async(req, res) => {

});

// Delete User
router.delete('/user/me', async(req, res) => {

});

module.exports = router;