const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { verifyEmployer } = require('../middlewares/roles');
const { createJob, getJobs, jobDetail } = require('../controllers/jobController');

router.post('/create', auth, verifyEmployer, createJob);
router.get('/', getJobs);           //handles both all jobs and filtered jobs
router.get('/:jobId', jobDetail);

module.exports = router;