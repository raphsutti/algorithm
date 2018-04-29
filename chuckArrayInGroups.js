
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrSliced = []; 
  for (var i = 0; i < arr.length/size; i++) {
    var arrPush = arr.slice(i*size, size+i*size)
    arrSliced.push(arrPush);
//     arrSliced = arr.push(arr.slice(i, 2))
    //arrSliced.push(arr.slice(arr[i+i],size+i));
  }
  return arrSliced;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
