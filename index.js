(function() {
  var path = require('path');
  var fs = require('fs');
  var through = require('through');
  var reiny = require('reiny/lib');

  module.exports = function(file) {
    if (!/\.reiny$/.test(file)) {
      return through();
    }
    var inputString = '';
    var write = function(buf) {
      return inputString += buf;
    };
    var end = function() {
      this.queue(reiny.compile(inputString));
      return this.queue(null);
    };
    return through(write, end);
  };
})();
