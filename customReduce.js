function customReduce(callback, initialValue) {
  var accumulator = initialValue;

  for (var i=0; i<arr.length; i++) {
    if (accumulator !== undefined) {
      // accumulator = callback.call(undefined, accumulator, this[i], i, this);
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i]
    }
  }

  return accumulator;
}

Array.prototype.customReduce = customReduce;

var arr = [1, 2, 3, 4, 5];

var sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
