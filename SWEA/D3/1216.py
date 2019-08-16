def palindrome(word):
    for i in range(len(word)//2):
        if word[i] != word[-1-i]:
            return False
    return True

def check_palindrome(words):
    for n in range(100, 1, -1):
        for i in range(100):
            for j in range(100 - n + 1):
                word = ''
                if palindrome(words[i][j:j + n]):
                    return n
                for w in range(n):
                    word += words[j + w][i]
                if palindrome(word):
                    return n


for _ in range(1, 11):
    t = int(input())
    words = [input() for _ in range(100)]
    print('#{} {}'.format(t, check_palindrome(words)))


