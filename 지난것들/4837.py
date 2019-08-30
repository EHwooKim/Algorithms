# 부분집합의 합
T = int(input())
A = list(range(1, 13))

for t in range(1, T + 1):
    N, K = map(int, input().split())

    count_NK = 0
    for i in range(1<<12):
        subset = []
        count = 0
        for j in range(12):
            if i & (1 << j):
                subset.append(A[j])
                count += 1
        if count == N and sum(subset) == K:
            count_NK += 1

    print('#{} {}'.format(t, count_NK))