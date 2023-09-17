const express = require('express');
const router = express.Router();

const upload = require('../config/multer');

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/upload',upload.single('csvFile') ,homeController.upload);
router.get('/open/:filename', homeController.open);


module.exports = router;