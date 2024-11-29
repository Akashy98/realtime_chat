const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

router.get('/', chatController.getHomePage);
router.get('/chat/:id', chatController.getChatPage);

module.exports = router;
