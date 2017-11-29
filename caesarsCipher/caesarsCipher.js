function rot13(str) { // LBH QVQ VG!
  var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result ="";
  for (var i=0; i<str.length; i++) {
    if (alph.indexOf(str[i]) > -1) {
      var position = alph.indexOf(str[i]);
      var newPos = Math.abs(position + 13) % 26;
      result += alph[newPos];
    } else {
      result += str[i];
    }
  }
  return result;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");