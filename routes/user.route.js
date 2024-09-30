// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/user.controller');

// Route: POST /api/users/register
router.post('/signup', signupUser);

// Route: POST /api/users/login
router.post('/login', loginUser);

module.exports = router;
