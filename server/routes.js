'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/*', function indexRouteHandler (req, res) {
  res.render('index', {
  	title: "Website Example",
    token: _.uniqueId()
  });
});

module.exports = router;