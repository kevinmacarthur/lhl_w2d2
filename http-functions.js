
module.exports = function getHTML (options, callback) {
  var https = require('https')
  var data = [];
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      data.push(chunk);
    });

    response.on('end', function() {
      console.log('Response stream complete')
      var final = data.join('')
      callback(final)
    });
  });
};