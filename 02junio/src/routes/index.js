const express = require('express');
const users = require('./users/userRoutes.js');
const router = express.Router();
router.use('/', users);
module.exports = router;
