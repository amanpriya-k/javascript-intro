range = function(start, end) {
  if (start === end) {
    return [start];
  }
  
  return [start].concat(range(start + 1, end));
};

sumRec = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  
  return arr[0] + sumRec(arr.slice(1, arr.length));
};

exponent = function(base, exp) {
  if (exp === 1) {
    return base;
  }
  
  return base * exponent(base, exp-1);
};

fibonacci = function(n) {
  if (n <= 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  return fibonacci(n - 1).concat(fibonacci(n - 1).slice(-2).reduce( (n1, n2) => (n1 + n2)));
};

deepDup = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(`${arr[i]} i = ${i} arr = ${arr}`);
    // if (i === 1) {
    //   debugger;
    // }
    if (arr[i] instanceof Array) {
      result = result.concat([deepDup(arr[i])]);
    } else {
      result = result.concat(arr[i]);
    }
  }
  return result;
};

bsearch = function(arr, target) {
  let mid = Math.floor(arr.length/2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr.length === 1) {
    return -1;
  }
  
  let left = arr.slice(0, mid);
  let right = arr.slice(mid+1, arr.length);

  if (target < arr[mid]) {
    return bsearch(left, target);
  } else { 
    let result = bsearch(right, target);
    if (result != -1) {
      return result + mid + 1;
    }
    return -1; // YOU NEED THIS -1 HERE !!! ( result.nil? ? result : //nil// )
  }
};




mergesort = function(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid, arr.length));
  return merge(left, right);
};

merge = function(left, right) {
  let result = [];
  while (left.length != 0 && right.length != 0) {
    let leftFirst = left[0];
    let rightFirst = right[0];
    if (leftFirst < rightFirst) {
      result.push(leftFirst);
      left.shift();
    } else {
      result.push(rightFirst);
      right.shift();
    }
  }
  return result.concat(left).concat(right);
};




subset = function(arr) {
  if (arr.length === 1) {
    return [[], arr];
  }
  // 
  return subsetHelper(subset(arr.slice(0, -1)), arr.slice(-1)[0]);
};

subsetHelper = function(arr, el) {
  let result = [];
  for(i = 0; i < arr.length; i++) {
    // debugger;
    let x = deepDup(arr[i]);
    result.push(x.push(el));
  }
  debugger;

  return arr.concat(result);
};

let a = [1, 2];
console.log(subset(a));