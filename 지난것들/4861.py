def palindrome(word):
    for i in range(len(word)//2):
        if word[i] != word[-1-i]:
            return 0
    return word


def check_palindrome(N, M, N_matrix):
    for i in range(N):
        for j in range(N - M + 1):
            word = ''
            result1 = palindrome(N_matrix[i][j:j + M])
            if result1 != 0:
                return result1
            for w in range(M):
                word += N_matrix[j + w][i]
            result2 = palindrome(word)
            if result2 != 0:
                return result2


T = int(input())

for t in range(1, T + 1):
    N, M = map(int, input().split())
    N_matrix = [input() for _ in range(N)]
    result = check_palindrome(N, M, N_matrix)

    print('#{} {}'.format(t, result))




