var https = require('https')

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    // response.on('response', function (response) {
      var data = [];
      response.on('data', function(chunk) {
        data.push(chunk);
      });
    // });

    response.on('end', function() {
      console.log('Response stream complete')
      console.log(data.join(''));
    });
  });
}
getAndPrintHTML()