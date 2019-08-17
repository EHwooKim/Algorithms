def palindrome(word):
    for i in range(len(word) // 2):
        if word[i] == '*' or word[-1-i] == '*':
            return 'Exist' 
        elif word[i] != word[-1-i]:
            return 'Not exist'
    return 'Exist'

T = int(input())
for t in range(1, T + 1):
    word = input()
    print('#{} {}'.format(t, palindrome(word)))