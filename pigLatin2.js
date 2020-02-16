function pigIt(str){
  words = str.split(" ")
  result = ""
  words.forEach((word) => {
    if(word !== "!" && word !== "?") {
    	chars = word.split("")
    	firstChar = chars.shift(0)
    	newWord =[]
    	newWord.push(chars.join(""),firstChar,"a","y")
    	result += newWord.join("") + " "
	} else {
		result += word + " "
	}
  })
  return result.trimRight()
}

// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
