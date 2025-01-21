const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First Name should be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color should be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate should be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity should be a number'),
    body('vehicle.vehicleType').isLength({ min: 3 }).withMessage('Vehicle Type should be at least 3 characters long')
], captainController.registerCaptain);

module.exports = router;