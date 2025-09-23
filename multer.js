const multer = require('multer')

const storage = multer.diskStorage({
    destination: "./public/cover",
    filename: (req, res, cb) =>{
        const uniqueName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueName)
    }
})

const upload = multer({storage})

module.exports = upload