test = int(input())

for t in range(1, test + 1):
    K, N, M = map(int, input().split())
    M_list = list(map(int, input().split()))
    M_list = [0] + M_list + [N]
    M_list += [0] * K
    me = 0
    count = 0

    while me < M + 1:
        for i in range(K, -1, -1):
            if i == 0:
                count = 1
                me = M + 1
                break
            else:
                if 0 < M_list[me + i] - M_list[me] <= K:
                    me += i
                    count += 1
                    break

    print('#{} {}'.format(t, count - 1))




