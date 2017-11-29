// find if all words in array 1 is in array 0;
function mutation(arr) {
  for (var i=0; i<arr[1].length; i++) {
    var re = new RegExp(arr[1][i],"gi");
    if (re.test(arr[0]) != true) 
      {
        return false;
      }
  }
  return true;
}

mutation(["hey", "y"]);
