def check(x, y, r):
    global min_num
    if r > min_num: return
    if x == N-1 and y == N-1:
        min_num = min(min_num, r + arr[x][y]); return
    if y+1 <= N-1:
        check(x, y+1, r + arr[x][y])
    if x+1 <= N-1:
        check(x+1, y, r + arr[x][y])

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr =[list(map(int, input().split())) for _ in range(N)]
    min_num = 0xffffff
    check(0, 0, 0)
    print('#{} {}'.format(t, min_num))
