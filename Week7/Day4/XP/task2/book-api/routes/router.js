const express = require('express')
const router = express.Router()


const {
    getAllBooks,
    getBookById,
    postBookById
} = require('./controller')

router.get('/',getAllBooks)
router.get('/:bookId',getBookById)
router.post('/',postBookById)

module.exports = router