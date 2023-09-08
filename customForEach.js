function customForEach(callback) {
  
  for (var i=0; i<this.length; i++) {
    callback(this[i], i, this)
  }

}

Array.prototype.customForEach = customForEach;

var arr = [1, 2, 3];

arr.customForEach(item => console.log(item));