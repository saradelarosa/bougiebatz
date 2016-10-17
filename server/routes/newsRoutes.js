var express = require('express');
var request = require('request');
var router = express.Router();


var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/Large', (req, res) => {
  console.log('GOT++++++')
  var reqUrl = 'http://api.nytimes.com/svc/news/v3/content/'
    + req.params.source + '/' + req.params.section + '/' + req.params.time + '.json' + '?limit=' + req.params.limit
console.log('lline 17 server req.url', reqUrl)
  var options = { method: 'GET',
    url: reqUrl
  };
  request(options, (error, response, body) => {
    console.log(response, "+++++body+++++");
    if (error) throw new Error(error);
    res.send(response);
  });

});
//for url in request:
// first all: all, nyt or iht
// second all: section
// then ? after json: limit= one through 20
//do source || all,    category || all, .... in react copmponents, timeFrame || 24, limit || 20
//example: 'http://api.nytimes.com/svc/news/v3/content/nyt/business/72.json?limit=15'




module.exports = router;
