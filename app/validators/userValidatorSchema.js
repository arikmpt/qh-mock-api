const { body } = require('express-validator');

const registerValidator = [
    body('username').notEmpty().withMessage('username is required').toLowerCase(),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('email invalid format').toLowerCase(),
    body('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long').notEmpty().withMessage('password is required')
]

module.exports = {
    registerValidator
}