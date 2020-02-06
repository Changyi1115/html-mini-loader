var loaderUtils = require("loader-utils");
var Minimize = require("minimize");
module.exports = function(source) {
  var callback = this.async();
  //标注清楚是否可以缓存
  if (this.cacheable) {
    this.cacheable();
  }
  var options = loaderUtils.getOptions(this) || {};
  var minimize = new Minimize(options);
  return minimize.parse(source, callback);
};
