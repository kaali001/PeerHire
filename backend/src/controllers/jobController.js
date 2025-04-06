const Job = require('../models/job');

exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.user.id });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getJobs = async (req, res) => {
  try {
    const { skills } = req.query;
    let filter = {};

    // Apply filter only if skills parameter exists
    if (skills) {
      const skillsArray = skills
        .split(",")
        .map((skill) => skill.trim().toLowerCase());

      // Match jobs with AT LEAST ONE of the specified skills
      filter.skillsRequired = { $in: skillsArray };
    }

    const jobs = await Job.find(filter)
      .populate("postedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.jobDetail = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId).populate('postedBy', 'name');
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};