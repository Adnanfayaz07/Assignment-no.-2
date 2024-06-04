const express = require('express');
const router = express.Router();
const astrologerController = require('../controllers/astrologerController');

router.post('/toggleTopAstrologer', astrologerController.toggleTopAstrologer);

module.exports = router;