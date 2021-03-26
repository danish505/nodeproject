const express = require('express');
const router = express.Router();
const path = require('path');
 

const WebsiteController = require('../controller/WebsiteController');
const UserController = require('../controller/UserController');


// router.get('/', shopController.getIndex);


router.get('/',WebsiteController.getIndex);


module.exports = router;