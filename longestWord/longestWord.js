function findLongestWord(str) {
	var strArr = str.split(" ");
	var count = 0;
	for (var i=0; i<strArr.length; i++) {
		var index;
		if (strArr[i].length > count) {
		count = strArr[i].length;
		index = i;
		}
	} return strArr[index].length;
	//return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");