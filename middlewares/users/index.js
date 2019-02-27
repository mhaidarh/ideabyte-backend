const express = require('express')
const router = express.Router()

const users = require('./functions')

// (POST) Register new user
router.post('/register', users.register)

// (POST) Login to user
router.post('/login', users.login)

// (GET) Get user profile
router.get('/profile', users.getProfile)

// (GET) Get one user by id
router.get('/profile/:id', users.getOneUserById)

// (GET) Get all users
router.get('/users', users.getAllUsers)

// (DELETE) Delete all users
router.delete('/users', users.deleteAllUsers)

// (DELETE) Delete one user by id
router.delete('/users/:id', users.deleteOneUserById)

// (PUT) Update one user by id
router.put('/users/:id', users.updateOneUserById)

module.exports = router