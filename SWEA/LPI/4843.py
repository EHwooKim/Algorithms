# 4843 특별한 정렬
T = int(input())

for t in range(1, T + 1):
    N = int(input())
    N_list = list(map(int, input().split()))
    switch = True

    for i in range(N - 1):
        index, num = i, N_list[i]
        for j in range(i+1, N):
            if switch:
                if N_list[j] > num:
                    index, num =j, N_list[j]
            if not switch:
                if N_list[j] < num:
                    index, num =j, N_list[j]
        N_list[i], N_list[index] = N_list[index], N_list[i]
        switch = not switch

    print('#{}'.format(t), end = ' ')
    print(*N_list[:10])
