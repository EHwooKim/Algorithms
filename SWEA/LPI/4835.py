T = int(input())

for t in range(1, T + 1):
    N, M = map(int, input().split())
    N_list = list(map(int, input().split()))
    sum_list = []
    for n in range(0,N - M + 1):
        sum = 0
        for m in range(M):
            sum += N_list[n+m]
        sum_list.append(sum)
    max_num =  min_num  = sum_list[0]
    for number in sum_list:
        max_num = number if number > max_num else max_num
        min_num = number if number < min_num else min_num

    print('#{} {}'.format(t, max_num - min_num))


