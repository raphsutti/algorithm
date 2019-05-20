def solution(message, K):
    # write your code in Python 3.6
    # Case with K larger than message length
    if K > len(message):
        return message
    # Case with K landing on " "
    elif message[K] == " ":
        return message[0:K]
    # Case with K landing in middle of a word
    else:
        # set blank flag until earler " " found
        blank = False
        counter = 1
        while not blank:
            if message[K-counter] == " ":
                blank = True
            else:
                counter += 1
        return message[0:K-counter]

print( solution("Codility We test coders", 10) ) # "Codility We"
print( solution("Why not", 100) ) # "Why not"
print( solution("The quick brown fox jumps over the lazy dog", 39) ) # "The quick brown fox jumps over the lazy"