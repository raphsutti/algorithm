# From Codility practice
# Find smallest missing integer from the array >0
# If all elements in array < 0, return 1
def solution(A):
    # write your code in Python 3.6
    result = []
    for i in range(1,max(A)):
        if i not in A:
            result.append(i)
    
    # If all highest value is a negative, return 1
    if max(A) < 0:
        return 1
    # If no missing values found, return highest value + 1
    elif not result:
        return max(A) + 1
    # Return smallest number 
    else:
        return min(result)

print(solution([1,3,6,4,1,2])) # returns 5