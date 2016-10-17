var express = require('express');
var request = require('request');
var router = express.Router();


var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/Large', (req, res) => {
  var reqUrl = 'http://api.nytimes.com/svc/news/v3/content/'
    + req.body.source + '/' + req.body.section + '/' + req.body.time + '.json' + '?limit=' + req.body.limit
  var options = { method: 'GET',
    url: reqUrl
    // first all: all, nyt or iht
    // second all: section
    // then ? after json: limit= one through 20
    //do source || all,    category || all, .... in react copmponents, timeFrame || 24, limit || 20
//example: 'http://api.nytimes.com/svc/news/v3/content/nyt/business/72.json?limit=15'
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
    res.send(response);
  });

});




module.exports = router;
