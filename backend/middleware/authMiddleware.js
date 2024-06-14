const jwt = require("jsonwebtoken");
const User = require("../Model/UserModel");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "").trim();
  console.log(`Token received: ${token}`);
  
  if (!token) {
    return res.status(401).send({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`Decoded token: ${JSON.stringify(decoded)}`);
    
    req.user = await User.findOne({ where: { id: decoded.userId } });

    if (!req.user) {
      return res.status(401).send({ message: "Token is not valid" });
    }
    
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(401).send({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
