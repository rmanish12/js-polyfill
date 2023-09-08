function customFind(callback) {
  var result;

  for (var i=0; i<this.length; i++) {
    if (callback(this[i], i, this)) {
      result = this[i];
      break;
    }
  }

  return result;
};

Array.prototype.customFind = customFind;

var arr = [1, 2, 4, 5, 7];

var customArray = arr.customFind(item => item%3 === 0);

console.log(customArray);