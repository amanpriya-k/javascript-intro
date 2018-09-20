Array.prototype.uniq = function() {
  const result = [];
  for (i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function() {
  const result = [];
  for (i = 0; i < this.length - 1; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  const result = [];
  for (i = 0; i < this.length; i++) {
    result.push([]);
  }
  for (k = 0; k < this.length; k++) {
    for(l = 0; l < this.length; l++) {
      result[l][k] = this[k][l];
    }
  }
  return result;
};

const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(matrix.transpose());