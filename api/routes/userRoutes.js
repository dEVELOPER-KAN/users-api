const express = require('express');
const userController = require('../controller/userController')

const router = express.Router();


router.route('/')
    .get(userController.getUsers)
    .post(userController.addUsers);


router.route('/:id')
    .delete(userController.deleteUsers)
    .patch(userController.updateUsers);


module.exports = router;