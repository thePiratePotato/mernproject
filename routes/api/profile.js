//  use to fetch info and create user profile
// profile:
// locaiton, bio, like all info which tells more about the users
// social network, linkedin, work experience
// profile model
// basic setting up template


// @route   GET api/profile/test
// @desc    test profile route
// @access  Public 

const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: "Profile works perfectly, YAYAYYY" }));

// export the Router so that the server can pick it up
module.exports = router;