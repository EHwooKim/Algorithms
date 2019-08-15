T = int(input())
 
for t in range(1, T + 1):
    N = int(input())
    matrix = [list(map(int, input().split())) for _ in range(N)]
 
    print(f'#{t}')
    for i in range(N):
        for j in range(N):
            print(matrix[N - j - 1][i], end = '')
        print(end = ' ')
        for j in range(N):
            print(matrix[N - i - 1][N - j - 1], end = '')
        print(end = ' ')
        for j in range(N):
            print(matrix[j][N - i - 1], end = '')
        print()