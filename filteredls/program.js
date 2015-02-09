var path = require('path');
var fs = require('fs');

function MatcherEndsWith(searchSuffix){
  this.suffix = "." + searchSuffix;

  this.match = function(string){
    return this.suffix == path.extname(string);
  }
}

fs.readdir(process.argv[2], function(_err, list){ 
  var matcher = new MatcherEndsWith(process.argv[3]);

  for(var i = 0 ;i < list.length; i++)
  {
    if(matcher.match(list[i])){
      console.log(list[i]);  
    }
  }
});








