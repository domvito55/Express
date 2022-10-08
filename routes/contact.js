var express = require('express');
var router = express.Router();

/* GET Contact form. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Contact' });
});

/* GET Each Project. */

module.exports = router;
