var filterext = require('./filterext');

filterext(process.argv[2], process.argv[3], function(err, items){
    if(err){
      console.log(err);
    }
    else {
      for(var i = 0 ;i < items.length; i++){
        console.log(items[i]);  
      }
    }
});







