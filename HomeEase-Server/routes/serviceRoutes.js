const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Get all services
router.get('/', serviceController.getAllServices);

// Get a single service by ID
router.get('/:id', serviceController.getServiceById);

// Create a new service
router.post('/', serviceController.createService);

// Delete a service
router.delete('/:id', serviceController.deleteService);

// Update a service
router.put('/:id', serviceController.updateService);

module.exports = router;