// remove 'howMany' elements from head of arr
function slasher(arr, howMany) {
  // using slice
  // return arr.slice(howMany, arr.length);
  // using splice
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
