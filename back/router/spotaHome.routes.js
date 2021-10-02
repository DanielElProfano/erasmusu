const { response } = require('express');
const express = require('express');
const spotaHomeController = require('../controller/spotaHome.controller');

const router = express.Router();

router.get('/', spotaHomeController.fetchAll);

module.exports = router;