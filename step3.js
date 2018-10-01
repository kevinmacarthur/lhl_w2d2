var https = require('https')

function getAndPrintHTML (options) {

https.get(options, function(response) {

    response.setEncoding('utf8');

      var data = [];
      response.on('data', function(chunk) {
        data.push(chunk);
      });

    response.on('end', function() {
      console.log('Response stream complete')
      console.log(data.join(''));
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)

