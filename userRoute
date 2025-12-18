const express = require('express'); //untuk membuat router
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllBooks);
router.get('/:code', userController.getBookByCode);

module.exports = router;