function titleCase(str) {
  var resultArray = []
  str.split(" ").forEach(function(elem){
    var word = ""
    word += elem[0].toUpperCase()
    for(var i=1; i<elem.length;i++) {
      word +=elem[i].toLowerCase()
    }
    resultArray.push(word)
  })
  return resultArray.join(" ")
}

titleCase("I'm a little tea pot");

