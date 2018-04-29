// function to return every word capitalised 
function titleCase(str) {
  // result to be stored in this array
  var resultArray = [];
  // split input string into array
  str.split(" ").forEach(function(elem){
    // current elem word result
    var word = "";
    // add first letter as capitalised
    word += elem[0].toUpperCase();
    // loop through and add the rest of the letters, skip first letter
    for(var i=1; i<elem.length;i++) {
      // make sure other letters are lower case
      word +=elem[i].toLowerCase();
    }
    resultArray.push(word);
  });
  return resultArray.join(" ");
}

titleCase("I'm a little tea pot");

