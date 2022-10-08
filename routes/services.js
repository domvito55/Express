var express = require('express');
var router = express.Router();

/* GET List of Projects. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'ListServices' });
});

/* GET Each Project. */

module.exports = router;
