// or nohup node init.js &
var forever = require('forever');
 
  var child = new forever.Forever('init.js', {
    max: 300,
    silent: false,
    args: []
  });
  child.start();
