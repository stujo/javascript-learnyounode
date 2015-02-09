/*

This problem is the same as the previous problem (HTTP COLLECT) 
in that you need to use http.get(). However, this time you will 
be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the 
URLs and print it to the console (stdout). 
You don't need to print out the length, just the data as a String; 
one line per URL. The catch is that you must print them out in the 
same order as the URLs are provided to you as command-line arguments.

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

"use strict";

function retriever(urls){
  var http = require('http');
  var Buffer = require('bl')
  var countdown = urls.length;
  var strings = [];

  for(var i = 0; i < countdown; i++){
    queueUp(i);
  }

  function queueUp(index){
    http.get(urls[index], function(response) {
      response.pipe(new Buffer(function(err,data){
        storeAndReport(index, data);
      }));
    });
  }

  function storeAndReport(index, data){
      strings[index] = data.toString();
      countdown--;
      if(countdown == 0){
        report();
      }
  }

  function report(){
    for(var i = 0; i < strings.length; i++){
      console.log(strings[i].toString());
    }
  }
}

process.argv.shift();
process.argv.shift();

retriever(process.argv);
