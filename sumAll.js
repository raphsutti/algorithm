
function sumAll(arr) {
//   return arguments[0][1]
  var array = arr.sort(function(a,b){
    return a-b;
  });
  var result = 0;
  for(var i=array[0]; i<=array[1]; i++) {
    result += i;
  }
  return result;
}

sumAll([5, 10]);
