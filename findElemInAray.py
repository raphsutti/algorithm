def find_all(array, n):
    return [item for item, x in enumerate(array) if x == n]
# find_all([6, 9, 3, 4, 3, 82, 11], 3) #[2, 4]
# find_all([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16) #[1, 9]
# find_all([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20) #[0, 1, 8]