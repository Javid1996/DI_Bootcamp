const express = require('express')
const router = express.Router()

const {
    getMethodHomepage,
    getMethodAbout
} = require("./controller.js")

router.get('/', getMethodHomepage)
router.get('/about', getMethodAbout)

module.exports = router;