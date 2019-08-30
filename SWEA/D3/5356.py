T = int(input())
for t in range(1, T + 1):
    arr = [list(input()) for _ in range(5)]
    N = 0
    for i in range(len(arr)):
        N = len(arr[i]) if len(arr[i])>=N else N
    print('#{}'.format(t), end=' ')
    for i in range(N):
        for j in range(5):
            if i >= len(arr[j]):continue
            print(arr[j][i], end='')
    print()
