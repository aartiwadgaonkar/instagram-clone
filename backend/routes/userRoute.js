const express = require("express")
const { registerUser, getAllregisterUsers, loginUser, allUsers } = require("../controllers/userController")
const { protected } = require("../middleware/loginOnly")
const router = express.Router()

router
    .get('/', getAllregisterUsers)
    .post('/register', registerUser)
    .post('/login', loginUser)
    .get('/search', protected, allUsers)

module.exports = router