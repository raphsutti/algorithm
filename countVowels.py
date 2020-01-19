def getCount(inputStr):
#    num_vowels = 0 
#    vowels = ['a', 'e', 'i', 'o', 'u']
#    for letter in inputStr:
#        if letter in vowels:
#            num_vowels += 1
#    return num_vowels
	return sum(char in 'aeiou' for char in inputStr)
# getCount("abracadabra") #5
