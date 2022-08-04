const User = require('../models/user')
const jwt = require("jsonwebtoken");

// Checks if user is authenticated or not
exports.isAuthenticatedUser = async (req, res, next) => {

    const { token } = req.cookies
      
    if (!token) {
        return res.status(401).json({
            Success:false,
            msg:"Login first to access this resource"
        })
  }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id);

    next()
}
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        console.log(req.user.role)
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                Success:false,
                msg:`Role (${req.user.role}) is not allowed to acccess this resource`
            })
        }
        next()
    }
}
