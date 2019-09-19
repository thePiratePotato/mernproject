// user authentication, passport bla bla bla
// user name, email, password
// user model



// @route   GET api/users/test
// @desc    test users route
// @access  Private 



// basic setting up template
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: "Users works perfectly, YAYAYYY" }));

// export the Router so that the server can pick it up
module.exports = router;