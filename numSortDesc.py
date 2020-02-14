def descending_order(num):
    # Bust a move right here
    array = []
    result = ''
    for char in str(num):
        array.append(char)
    array.sort(reverse=True)
    for char in array:
        result += char
    return int(result)
        
# test.assert_equals(descending_order(0), 0)
# test.assert_equals(descending_order(15), 51)
# test.assert_equals(descending_order(123456789), 987654321)
    
