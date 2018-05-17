// return index position to insert num into arr in ascending order
function getIndexToIns(arr, num) {
  var index;
  // sort by number not first character
  var array = arr.sort(function(a,b){return a-b;});

  for(var i=0; i<arr.length; i++) {
    if (array[i] >= arguments[1]) {
      return array.indexOf(array[i]);
    }
  }
  return arr.length;
}

getIndexToIns([2, 5, 10], 15);
