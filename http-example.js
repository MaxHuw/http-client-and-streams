var https = require('https');

console.log("I did it!");

var options = {
  host: 'www.example.org',
  path: '/'
};

//www.example.org does not seem to work.

var callback = function() {
  console.log("In response handler callback!");
};

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I'va made the request!");