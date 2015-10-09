'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
  	title: "Website Example",
    token: _.uniqueId()
  });
});

// TODO: API routes

module.exports = router;