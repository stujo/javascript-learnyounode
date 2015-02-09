function addAndShift(args){
   if(args.length == 0){ return 0; }
   return parseInt(args.shift(),10) + addAndShift(args);
}

process.argv.shift();
process.argv.shift();
 
console.log(addAndShift(process.argv))

