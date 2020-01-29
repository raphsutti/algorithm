def persistence(n):
    result = 0
    if len(str(n)) <= 1:
        return result
    else:    
        multipliedResult = n
        while len(str(multipliedResult)) > 1 :
            multiplied = 1
            for digit in str(multipliedResult):
                multiplied *= int(digit)
                print(multiplied)
            multipliedResult = multiplied
            print(multipliedResult)
            result += 1
        return result

'''
Test.it("Basic tests")
Test.assert_equals(persistence(39), 3)
Test.assert_equals(persistence(4), 0)
Test.assert_equals(persistence(25), 2)
Test.assert_equals(persistence(999), 4)
'''
