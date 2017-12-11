function updateInventory(arr1, arr2) {
  for (var i=0; i<arr2.length; i++) {
    // look through every item in arr1
    var invenExist = arr1.every(function(element) {
      return arr2[i][1] != element[1];
    });
    // if doesn't exist, add name and value to arr1, else total up the value
    if (invenExist) {
      arr1.push(arr2[i]);
    } else {
      // find index of arr1
      var indexVal = arr1.findIndex(function(element) {
        return element[1] === arr2[i][1];
      });
      // add the values of that arr1[index]
      arr1[indexVal][0] += arr2[i][0];
    }
  }
  // sort by item name - index 1
  return arr1.sort(function(a,b) {
    return a[1] < b[1] ? -1 : 1
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);