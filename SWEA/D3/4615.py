def check(mx,my):
    if 0 <= mx <=N-1 and 0 <= my <=N-1:
        return True
    else: return False
        
def turn(x, y, c):
    arr[x][y] = c
    move = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]
    d = 1 if c == 2 else 2 
    for i in range(8):
        point=[]
        mx, my = x+move[i][0], y+move[i][1]
        if not check(mx,my):continue
        if arr[mx][my] == d:
            point.append((mx, my))
            while check(mx,my) and arr[mx][my] == d:
                mx, my = mx+move[i][0], my+move[i][1]
                if check(mx,my) and arr[mx][my] == d:
                    point.append((mx, my))
        if not check(mx,my) or arr[mx][my] == 0:continue
        for index in point:
            arr[index[0]][index[1]] = c

T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [[0]*N for _ in range(N)]
    arr[N//2-1][N//2-1] = arr[N//2][N//2] = 2
    arr[N//2-1][N//2] = arr[N//2][N//2-1] = 1
    for _ in range(M):
        x, y, c = map(int, input().split())
        turn(y-1, x-1, c)
    count_1, count_2 = 0, 0
    for i in range(N):
        count_1 += arr[i].count(1)
        count_2 += arr[i].count(2)
    print('#{} {} {}'.format(t, count_1, count_2))