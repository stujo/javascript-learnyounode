/*

Write a program that performs an HTTP GET request 
to a URL provided to you as the first command-line argument. 

Collect all data from the server (not just the first "data" event) 
and then write two lines to the console (stdout):

The first line you write should just be an integer representing 
the number of characters received from the server. 

The second line should contain the complete String of characters 
sent by the server.

*/

/*

Node Streams:

Readable streams have two "modes": a flowing mode and a paused mode. When in flowing mode, data is read from the underlying system and provided to your program as fast as possible. In paused mode, you must explicitly call stream.read() to get chunks of data out. Streams start out in paused mode.

Note: If no data event handlers are attached, and there are no pipe() destinations, and the stream is switched into flowing mode, then data will be lost.

a) http://nodejs.org/api/stream.html
1) http://dailyjs.com/2012/09/10/streams/
2) http://dailyjs.com/2012/11/19/streams-part-2/

Pipe usage:
https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-stream-pipe
*/

var http = require('http');
var url = process.argv[2];
var Buffer = require('bl')

http.get(url, function(response) {

  // It looks like Buffer's callback function is closed when the stream ends
  var buffer = new Buffer(function(err,data){
    var str = data.toString();
    console.log(str.length);
    console.log(str);
  });

  response.pipe(buffer);

}); 





