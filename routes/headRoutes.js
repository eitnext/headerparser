const express = require('express');
const headController = require('../controllers/headController')

const router = express.Router();


router.route('/whoami').get(headController.getWhoami);

module.exports = router;