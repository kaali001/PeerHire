const verifyEmployer = (req, res, next) => {
    if (req.user.role !== 'employer') {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
  
  const verifyFreelancer = (req, res, next) => {
    if (req.user.role !== 'freelancer') {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
  
  module.exports = { verifyEmployer, verifyFreelancer };