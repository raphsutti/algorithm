def solution(A):
    # write your code in Python 3.6
    text = str(A)
    textLength = len(text)
    result = ''

    # for even number length cases
    if textLength % 2 == 0:
        for i in range(textLength//2):
            result += text[i] + text[textLength-i-1]
        return int(result)
    # for odd number length cases
    else:
        for i in range(textLength//2):
            result += text[i] + text[textLength-i-1]
        # add the middle value
        return int(result + text[int((textLength-1)/2)])

print ( solution(123456) ) # 162534
print ( solution(130) ) # 103

    