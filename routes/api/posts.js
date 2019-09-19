// enable user to create posts and comment upon other users
// basic setting up template

// @route   GET api/posts/test
// @desc    test post route
// @access  Public 



const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: "Post works perfectly, YAYAYYY" }));

// export the Router so that the server can pick it up
module.exports = router;