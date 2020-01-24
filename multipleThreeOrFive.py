def solution(number):
    result = 0
    for item in range(1,number):
        if item % 3 == 0 or item % 5 == 0:
            result += item
    return result
    
# test.assert_equals(solution(10), 23)
