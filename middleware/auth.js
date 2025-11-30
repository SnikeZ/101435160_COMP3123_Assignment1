const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: "Access denied. No token provided."
      });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'ebaldin', (err, decoded) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid or expired token."
        });
      }

      req.user = decoded;
      next();
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

module.exports = authenticateToken;
