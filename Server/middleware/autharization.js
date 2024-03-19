const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).send({ auth: false, message: "No token provided" });

    // Extract the token from the Authorization header
    const token = authHeader.split(' ')[1];
    console.log(token)

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
        // if everything is fine save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;