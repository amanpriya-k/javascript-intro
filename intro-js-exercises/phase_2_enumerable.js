
Array.prototype.myEach = function(callback) {
  for(i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const result = [];
  this.myEach( el => result.push(callback(el)) );
  return result;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let arr = this;
  let acc = initialValue;
  if (initialValue === undefined) {
    acc = this[0];
    arr.shift();
  }
  arr.myEach( (el) => (acc = callback(acc, el)) );

  return acc;
};