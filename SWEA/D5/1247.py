def coupang(k, used, now, total):
    global MIN
    if total > MIN: return
    if k == N:
        total += abs(now[0] - arr[1][0]) + abs(now[1] - arr[1][1])
        MIN = min(MIN, total)
        return

    for i in range(N+2):
        if used & (1<<i): continue
        dis = abs(now[0] - arr[i][0]) + abs(now[1] - arr[i][1])
        coupang(k+1, used|(1<<i), arr[i], total + dis)

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    a = list(map(int, input().split()))
    arr = []
    for i in range(N+2):
        arr.append((a[i*2], a[i*2+1]))
    MIN = 0xffffff
    coupang(0, 3, arr[0], 0)
    print('#{} {}'.format(t, MIN))

