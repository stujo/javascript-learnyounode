var path = require('path');
var fs = require('fs');


function MatcherEndsWith(searchSuffix){
  this.suffix = "." + searchSuffix;

  this.match = function(string){
    return this.suffix == path.extname(string);
  }
}


module.exports = function(path,filter,callback){
  fs.readdir(path, function(err, list){ 
    if (err){
      callback(err);
    } else {
      var matcher = new MatcherEndsWith(filter);
      var filteredList = [];
      for(var i = 0 ;i < list.length; i++)
      {
        if(matcher.match(list[i]))
        {  
          filteredList.push(list[i]);
        }
      }
      callback(null, filteredList);
    }
  });
};
