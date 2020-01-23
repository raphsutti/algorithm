def get_grade(s1, s2, s3):
    # Code here
    average = (s1+s2+s3)/3
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    else:
        return "F"

'''
test.assert_equals(get_grade(95, 90, 93), "A", "get_grade(95, 90, 93)")
test.assert_equals(get_grade(100, 85, 96), "A", "get_grade(100, 85, 96)")
test.assert_equals(get_grade(92, 93, 94), "A", "get_grade(92, 93, 94)")
'''
