function customFilter(callback) {
  var result = [];

  for (var i=0; i<this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }

  return result;
};

Array.prototype.customFilter = customFilter;

var arr = [1, 2, 3, 6, 8, 9];

var customArray = arr.customFilter(item => item%3 === 0);

console.log(customArray);