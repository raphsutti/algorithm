// Return letters with increasing repeats separated by hyphen
function accum(s) {
  s = s.toLowerCase();
  var result = [];
  var currentChar;
  var currentSegment;

  for(var i=1; i<s.length+1; i++) {
    currentChar = s[i-1].repeat(i);
    currentSegment = currentChar.charAt(0).toUpperCase() + currentChar.slice(1);
    result.push(currentSegment);
  }
  
  return result.join('-');
}
