// returns 2D array by group with length of size
function chunkArrayInGroups(arr, size) {
  // blank array to be pushed
  var resultArr = [];
  // choose to skip indexes by size count
  for (var i=0;i<arr.length;i+=size) {
    // push each group into new array
    resultArr.push(arr.slice(i,i+size));
  }
  return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
