# From Codility practice
# Find smallest missing integer from the array >0
# If all elements in array < 0, return 1
def solution(A):
    # write your code in Python 3.6
    maxNum = max(A)
    result = []
    for i in range(1,maxNum):
        if i not in A:
            result.append(i)
    
    if max(A) < 0:
        return 1
    elif not result:
        return max(A) + 1
    else:
        return min(result)
solution([1,3,6,4,1,2])