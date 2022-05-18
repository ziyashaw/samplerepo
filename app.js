const http = require('http');

http.createServer(function (req, res) {

  res.write('<html><head></head><body>');

  res.write('Welcome to saks india'+'<br/>');

  res.write('===================================='+'<br/>');

  res.write('</body></html>');

  res.end();

}).listen(80, '0.0.0.0');
