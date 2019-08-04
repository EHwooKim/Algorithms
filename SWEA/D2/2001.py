T = int(input())

for t in range(1, T + 1):
    N, M = map(int, input().split())
    N_list = []
    for i in range(N):
        N_list.append(list(map(int, input().split())))
    
    i_start = j_start = 0
    result = 0

    for i_start in range(N - M + 1):
        for j_start in range(N - M + 1):
            sum_M = 0    
            for i in range(M):
                for j in range(M):
                    sum_M += N_list[i_start + i][j_start + j]
            result = sum_M if sum_M > result else result

    print(f'#{t} {result}')