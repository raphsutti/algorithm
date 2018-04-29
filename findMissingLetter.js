function fearNotLetter(str) {
  var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v' ,'w', 'x', 'y', 'z'];
  var index = alph.indexOf(str[0]);
  var result = "";
  for (var i=0; i<str.length; i++) {
    if (str[i] != alph[index+i]) {
      result += alph[index+i]
      index++;
    }
  }
  
  if (!result) {
    result = undefined
  }
  return result;
}

fearNotLetter("bcd");