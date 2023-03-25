const router = require('express').Router()

// controller 
const exampleController = require('../controllers/example.controller')

// middlewares
const upload = require('../middlewares/upload')
const validateSchema = require('../middlewares/validateSchema')

// schemas
const exampleSchema = require('../schemas/example.schema')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/', upload.single('file'), validateSchema(exampleSchema), exampleController.examplePost)

module.exports = router