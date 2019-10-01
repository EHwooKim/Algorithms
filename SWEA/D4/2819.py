def pattern(x, y, p):
    p += arr[x][y]
    if len(p) == 7: 
        result.add(p)
        return

    C = [(0,1), (0,-1), (1,0), (-1,0)]
    for c in C:
        dx, dy = x + c[0], y + c[1]
        if 3 >= dx >= 0 and 3 >= dy >= 0:
            pattern(dx, dy, p)

T = int(input())
for t in range(1, T + 1):
    arr = [list(input().split()) for _ in range(4)]
    result = set()
    for i in range(4):
        for j in range(4):
            pattern(i, j, '')
    print('#{} {}'.format(t, len(result)))