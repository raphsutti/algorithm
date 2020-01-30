def high_and_low(numbers):
   result = [int(string) for string in numbers.split(" ")]
   return str(max(result)) + " " + str(min(result)) 
#     Test.assert_equals(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
