const express = require('express'),
    router = express.Router(),
    userRouter = require('./user')

router.use('/user', userRouter);

module.exports = router