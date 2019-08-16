def palindrome(word):
    for i in range(len(word) // 2):
        if word[i] != word[-1-i] and word[i] != '*' and word[-1-i] != '*':
            return 'Not exist'
        elif word[i] == '*' or word[-1-i] == '*':
            return 'Exist'
    return 'Exist'

T = int(input())
for t in range(1, T + 1):
    word = input()
    print('#{} {}'.format(t, palindrome(word)))
