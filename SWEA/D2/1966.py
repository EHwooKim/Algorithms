T = int(input())
for t in range(1, T + 1):
    N = int(input())
    N_list = list(map(int, input().split()))

    for i in range(N-1):
        min_idx, min_num = i, N_list[i]
        for j in range(i + 1, N):
            if N_list[j] < min_num:
                min_idx, min_num = j, N_list[j]
        N_list[i], N_list[min_idx] = N_list[min_idx], N_list[i]

    print(f'#{t}', *N_list)