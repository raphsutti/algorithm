function myReplace(str, before, after) {
  var repl = "";
  if(before[0] === before[0].toUpperCase()) {
    repl += after[0].toUpperCase();
    for (var i=1; i<after.length; i++) {
      repl += after[i];
    }
  } else {
    repl = after;
  }
  
  
  return str.replace(before,repl);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");