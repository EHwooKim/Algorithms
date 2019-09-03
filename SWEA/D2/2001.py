T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    i_start = j_start = result = 0

    for i_start in range(N - M + 1):
        for j_start in range(N - M + 1):
            sum_M = 0    
            for i in range(M):
                for j in range(M):
                    sum_M += arr[i_start + i][j_start + j]
            result = sum_M if sum_M > result else result

    print('#{} {}'.format(t, result))
