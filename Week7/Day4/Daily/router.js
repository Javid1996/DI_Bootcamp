const express = require('express');
const router = express.Router()

const {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById
} = require('./controller')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/users',getAllUsers)
router.get('/users/:id',getUserById)
router.put('/users/:id',updateUserById)

module.exports = router;