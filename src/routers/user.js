const express = require('express');
const User = require('../models/user.model');
const router = new express.Router();

// Create user
router.post('/user', async(req, res) => {
 
});

// User Login
router.post('/user/login', async(req, res) => {

});

// User Logout
router.post('/user/logout', async(req, res) => {

});

// Fetch User Id
router.get('/user/:id', async(req, res) => {

});

// Update User
router.patch('/user/me', async(req, res) => {

});

// Delete User
router.delete('/user/me', async(req, res) => {

});

module.exports = router;