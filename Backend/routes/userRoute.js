var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

router.get('/getallusers',userController.getAllUsers);
router.post('/adduser',userController.createUser);

router.get('/findUserByUsername/:username', userController.findUserByUsername);

router.delete('/:userId',userController.deleteUser);
router.put('/:userId',userController.updateUser);
router.get('/:userId',userController.getUser);

console.log('Backend: userRoute');

module.exports = router;
