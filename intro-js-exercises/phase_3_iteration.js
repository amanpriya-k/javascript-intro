bubbleSort = function(array) {
  for (i = 0; i < array.length - 1; i++) {
    let sorted = true;
    for(j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        sorted = false;
      }
    }

    if (sorted) {
      return array;
    }
  }
};

subtrings = function(string) {
  const answer = [];
  for(i = 0; i < string.length; i++) {
    for(j = i+1; j <= string.length; j++) {
      answer.push(string.slice(i, j));
    }
  }
  return answer;
};