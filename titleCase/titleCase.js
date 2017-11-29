function titleCase(str) {
  var strLow = str.toLowerCase(); 
  var strArr = strLow.split(" ");
  var result = "";
  var final = "";
  for (var i=0; i<strArr.length; i++) {
    var charArr = strArr[i].split("");
    charArr[0] = charArr[0].toUpperCase();
    result = charArr.join("");
    final += " ";
    final += result;
  }
  return final.replace(/^\s+|\s+$/g, "");
}

titleCase("I'm a little tea pot");
