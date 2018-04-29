// repeat str, num times - if num < 1, return ""
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = "";
  // catch num less than 1
  if (num < 1) {
    return "";
  } else {
    // add to str num times
    for(var i=0; i<num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
