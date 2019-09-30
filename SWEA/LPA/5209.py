def factory(k, used, total):
    global MIN
    if total > MIN: return
    if k == N:
        MIN = total
    for i in range(N):
        if used & (1<<i): continue
        factory(k + 1, used|(1<<i), total+arr[k][i])

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    MIN = 0xffffff
    factory(0, 0, 0)
    print('#{} {}'.format(t, MIN))