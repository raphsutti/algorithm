function pigIt(str){
	return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3") 
}
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
