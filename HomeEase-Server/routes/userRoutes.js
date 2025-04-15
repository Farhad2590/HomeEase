const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.get('/', userController.getAllUsers);
router.get('/:email', userController.getUserByEmail);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/updateUserRole/:email', userController.updateUserRole);
router.get('/admin/:email', userController.checkAdminStatus);
router.get('/provider/:email', userController.checkProviderStatus);

module.exports = router;