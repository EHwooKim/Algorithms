def go(k, left, total, used):
    global min_num
    if total > min_num: return
    if k == N-1:
        min_num = min(total + arr[left][0], min_num); return
    for i in range(N):
        if used & (1<<i): continue
        go(k+1, i, total+arr[left][i], used|(1<<i))

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    min_num = 0xffffff
    go(0, 0, 0, 1)
    print('#{} {}'.format(t, min_num))
