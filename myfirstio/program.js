var fs = require('fs');

var contents = fs.readFileSync(process.argv[2], 'utf8');


console.log(contents.split('\n').length - 1);





