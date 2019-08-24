/*
Add these lines to the main server.js file

const router = require('./router');
app.use('/router', router);
*/

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "The router works!" });
});

module.exports = router;
