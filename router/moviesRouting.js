const express = require ('express')

const router = express.Router()

const movieController = require('../controller/moviesController')


// index
router.get('/', movieController.index)


// show
router.get('/:id', movieController.show)

module.exports = router