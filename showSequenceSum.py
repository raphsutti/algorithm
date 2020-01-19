def show_sequence(n):
    sum = 0
    result = '0'
    if n == 0:
        return '0=0'
    elif n < 0:
        return str(n) + '<0'
    else:
        for i in range(1,n+1):
            sum += i
            result += '+' + str(i)
        return result + ' = ' + str(sum)

# tests = (
#     (6, "0+1+2+3+4+5+6 = 21"),
#     (7, "0+1+2+3+4+5+6+7 = 28"),
#     (0, "0=0"), 
#     (-1, "-1<0"), 
#     (-10, "-10<0"),
