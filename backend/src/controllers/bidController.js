const Bid = require('../models/bid');
const Job = require('../models/job');

exports.placeBid = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const bid = new Bid({
      ...req.body,
      job: req.params.jobId,
      freelancer: req.user.id
    });
    await bid.save();
    res.status(201).json(bid);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBidsForJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Verifying job actually exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const bids = await Bid.find({ job: jobId })
      .populate("freelancer", "name email")
      .sort({ createdAt: -1 });

    res.json({
      job: {
        id: job._id,
        title: job.title,
        budget: job.budget,
      },
      bids,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.acceptBid = async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.bidId).populate('job');
    if (!bid) return res.status(404).json({ message: 'Bid not found' });

    if (bid.job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    bid.status = 'Accepted';
    await bid.save();
    res.json(bid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.rejectBid = async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.bidId);
    bid.status = 'Rejected';
    await bid.save();
    res.json(bid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};