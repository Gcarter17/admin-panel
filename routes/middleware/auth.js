const jwt = require("jsonwebtoken");
const config = require("../../config/keys");

module.exports = function (req, res, next) {
    const secret = config.secretOrKey
    //  Get token from header
    const token = req.header("x-auth-token");
    // const token = req.header("x-auth-token");
    // check if no token
    if (!token) {
        console.log(req.header("x-auth-token"))

        return res.status(401).json({ msg: "no token, authorization denied" });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, secret);

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};
