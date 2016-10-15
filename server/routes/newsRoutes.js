var express = require('express');
var request = require('request');
var router = express.Router();


var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/homepage', (req, res) => {
  var options = { method: 'GET',
    url: 'https://newsapi.org/v1/articles',
    qs: {
      source: 'the-next-web',
      sortBy: 'latest',
      apiKey: '9c17e308110847d4895ee9c93907a4b1'
    }
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
  });
});

module.exports = router;
