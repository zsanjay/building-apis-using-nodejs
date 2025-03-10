const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin),userController.getAllUsers)
    .put(verifyRoles(ROLES_LIST.Admin), userController.updateUser)
    .delete(verifyRoles(ROLES_LIST.Admin), userController.deleteUser);
    
router.route('/:id').get(verifyRoles(ROLES_LIST.Admin),userController.getUserById);

module.exports = router;    

