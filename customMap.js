function customMap(callback) {
  var result = [];

  for (let i=0; i<this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
}

Array.prototype.customMap = customMap;

var arr = [1, 2, 3];

var customArray = arr.customMap(item => item * 2);

console.log(customArray);