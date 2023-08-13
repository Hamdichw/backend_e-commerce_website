const jwt = require("jsonwebtoken");
const { generateToken } = require("../authentication/authentication.service");
const checkToken = (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.exp < Date.now()) {
      // Token has expired
      const refreshToken = req.cookies.refreshtoken;
      if (!refreshToken) {
        return res.status(401).send("Unauthorized");
      }
      // Get new access token from refresh token
      const newToken = generateToken(
        { id: decoded.id, email: decoded.email },
        5 * 1000
      );
      res.cookie("jwt", newToken, {
        httpOnly: true,
        secure: true,
      });
    }
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
  if (!token) {
    return res.status(404).json({ message: "Unauthorized", ok: false });
  }
};

module.exports = { checkToken };
