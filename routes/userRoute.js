const express = require('express');
const router = express.Router();
const { getAll,home } = require('../controller/userController.js');

router.get('/greet', getAll);
router.get('/', home);

module.exports = router;