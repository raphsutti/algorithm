def solution(S, K):
    # write your code in Python 3.6
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    startDayIndex = days.index(S)
    endDayIndex = startDayIndex + K

    # Used modulo % 7 to find remainder and find the day in the 
    # "days" index as the day repeats
    return days[endDayIndex % 7]

print( solution("Wed", 2) ) # "Fri"
print( solution("Sat", 23) ) # "Mon"