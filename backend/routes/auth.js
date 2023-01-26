// Import dependencies
const jwt = require("jsonwebtoken");
const express = require("express");

// Setup the express server router
const router = express.Router();

// On post
router.post("/", async (req, res) => {
    // Dummy data
    const users = [{ username: "root", password: "root" }];
    console.log("REQUEST", req.body)
    // Get to user from the database, if the user is not there return error
    let user = users.find(u => u.username === req.body.username);
    //if (!user) throw new Error("Invalid username or password.");

    const token = jwt.sign(
    {
        id: user._id,
        roles: user.roles,
    }, "jwtPrivateKey", { expiresIn: "1000000h" });

    res.send({
        ok: true,
        token: token
    });
});

// Export the router
module.exports = router;