T = int(input())

for t in range(1, T + 1):
    N, M = map(int, input().split())
    N_list = list(map(int, input().split()))
    M_list = list(map(int, input().split()))

    if M < N:  # 항상 N이 작았으면 좋겠다
        N, M = M, N
        N_list, M_list = M_list, N_list

    result = []
    for i in range(M - N + 1):
        mul_sum = 0
        for m in range(N):
            mul_sum += N_list[m] * M_list[i + m]
        result.append(mul_sum)

    print(f'#{t} {max(result)}')