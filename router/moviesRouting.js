const express = require ('express')

const router = express.Router()
const upload = require('../multer')

const movieController = require('../controller/moviesController')


// index
router.get('/', movieController.index)


// show
router.get('/:id', movieController.show)

// store

router.post('/', upload.single('image'), movieController.store)

router.post('/:id/reviews', movieController.storeReview)

module.exports = router