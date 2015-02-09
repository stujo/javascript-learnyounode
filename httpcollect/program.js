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
var http = require('http');
var url = process.argv[2];
var Buffer = require('bl')

http.get(url, function(response) {
  var buffer = new Buffer();
  
  response.on("data", function (data) { 
    buffer.append(data);
  });
 
  response.on("end", function(){
    var str = buffer.toString();
    console.log(str.length);
    console.log(str);
  });
}); 





