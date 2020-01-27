def even_or_odd(number):
    if number % 2 == 0: 
        return "Even"
    else:
        return "Odd"
        
'''
test.expect(even_or_odd(2) == "Even")
test.expect(even_or_odd(0) == "Even")
test.expect(even_or_odd(7) == "Odd")
test.expect(even_or_odd(1) == "Odd")
test.expect(even_or_odd(-1) == "Odd")
'''	
