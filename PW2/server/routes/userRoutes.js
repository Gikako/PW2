const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/update', userController.update)

module.exports = router