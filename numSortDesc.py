def descending_order(num):
    # Bust a move right here
    return int("".join(sorted(str(num), reverse=True)))
 
# test.assert_equals(descending_order(0), 0)
# test.assert_equals(descending_order(15), 51)
# test.assert_equals(descending_order(123456789), 987654321)
    
