
(function(){
  var port = process.argv[2];
  var net = require('net')
  var strftime = require('strftime')
  var server = net.createServer(function (socket) {
    // socket handling logic
    var now = new Date();
    socket.write(strftime('%F %H:%M\n',now));
    socket.end();
  })
  server.listen(port);
})();

