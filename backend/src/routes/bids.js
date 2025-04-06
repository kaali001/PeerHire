const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { verifyFreelancer, verifyEmployer } = require('../middlewares/roles');
const { placeBid, getBidsForJob, acceptBid, rejectBid } = require('../controllers/bidController');

router.post('/:jobId', auth, verifyFreelancer, placeBid);
router.get('/:jobId', auth, getBidsForJob);
router.patch('/:bidId/accept', auth, verifyEmployer, acceptBid);
router.patch('/:bidId/reject', auth, verifyEmployer, rejectBid);

module.exports = router;