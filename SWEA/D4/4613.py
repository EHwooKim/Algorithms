T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [input() for _ in range(N)]
    result = 2*M-(arr[0].count('W') + arr[N-1].count('R'))
    c = 0xffffff
    for b in range(1, N-1):
        for i in range(1, N-b):
            d = 0
            for j in range(1, i):
                d += M - arr[j].count('W')
            for k in range(i,i+b):
                d += M - arr[k].count('B')
            for z in range(i+b,N-1):
                d += M - arr[z].count('R')
            c = min(c, d)
    print('#{} {}'.format(t, result+c))