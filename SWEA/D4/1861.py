T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    result = N ** 2 + 1  
    MAX = 0 
    for x in range(N):
        for y in range(N):  
            start = arr[x][y]
            count = 1
            while True:
                D = [(0, 1), (1, 0), (0, -1), (-1, 0)]
                for d in D:
                    dx, dy = x + d[0], y + d[1]
                    if 0 <= dx < N and 0 <= dy < N and arr[dx][dy] - arr[x][y] == 1:
                        count += 1
                        x, y = dx, dy
                        break
                else:
                    break
            if count > MAX or (count == MAX and start < result):
                result, MAX = start, count
    print('#{} {} {}'.format(t, result, MAX))