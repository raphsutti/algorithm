function translatePigLatin(str) {
  var vowel = ["a","e","i","o","u"];
  var result = "";
  var index;
  if (vowel.includes(str[0])) {
    return str += "way";
  }
  
  for (var i=0; i<str.length; i++) {
    if (vowel.includes(str[i])) {
      index = i;
      break;
    }
  }
  for (var i=index; i<str.length; i++) {
    result += str[i];
  }
  
  for (var i=0; i<index; i++) {
    result += str[i];
  }
  return result += "ay";
  return vowel.includes(str);
}
 
translatePigLatin("ctalifornia");