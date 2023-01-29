const express = require('express');
const router = express.Router();
const { getAll } = require('../controller/userController.js');

router.get('/user/:name', getAll);

module.exports = router;