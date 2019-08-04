def palindrome(word):
    if len(word) <= 1:
        return 1
    if word[0] != word[-1]:
        return 0
    else:
        return palindrome(word[1:-1])

T = int(input())
for t in range(1,T + 1):
    word = input()
    print(f'#{t} {palindrome(word)}')