def high_and_low(numbers):
    array = numbers.split(" ")
    numbersArray = []
    for item in range(0, len(array)):
        numbersArray.append(int(array[item]))
    return(str(max(numbersArray)) + " " + str(min(numbersArray)))
    
#     Test.assert_equals(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
