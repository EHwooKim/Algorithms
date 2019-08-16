def palindrome(word):
    for i in range(len(word)//2):
        if word[i] != word[-1-i]:
            return 0
    return 1


for t in range(1, 11):
    n = int(input())
    words = [input() for _ in range(8)]
    result = 0
    for i in range(8):
        for j in range(8 - n + 1):
            word = ''
            result += palindrome(words[i][j:j + n])
            for w in range(n):
                word += words[j + w][i]
            result += palindrome(word)
    print('#{} {}'.format(t, result))

