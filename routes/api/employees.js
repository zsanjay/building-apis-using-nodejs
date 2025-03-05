const express = require('express');
const router = express.Router();
const empController = require('../../controllers/employeesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(empController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), empController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), empController.updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Admin), empController.deleteEmployee);
    
router.route('/:id').get(empController.getEmployeeById);

module.exports = router;    

