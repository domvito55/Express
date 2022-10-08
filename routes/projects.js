var express = require('express');
var router = express.Router();

/* GET List of Projects. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'ListProjects' });
});

/* GET Each Project. */

module.exports = router;
