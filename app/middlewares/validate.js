const { validationResult } = require('express-validator');

const validate = (validations) => {
    return async (req, res, next) => {
      await Promise.all(validations.map(validation => validation.run(req)))
  
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        return next()
      }
  
      return res.status(400).json(responseError(errors.array(), { code: 400 }))
    }
}

module.exports = validate