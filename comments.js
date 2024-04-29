// Create web server
//=============================================================================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.getComments);
router.post('/', commentController.createComment);
router.put('/', commentController.updateComment);
router.delete('/', commentController.deleteComment);

// Export module
module.exports = router;