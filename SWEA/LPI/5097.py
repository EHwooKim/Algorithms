T = int(input())

for t in range(1, T + 1):
    N, M = map(int, input().split())
    N_arr = list(map(int, input().split()))

    print('#{} {}'.format(t, N_arr[M%N]))