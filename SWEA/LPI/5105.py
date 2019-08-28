from collections import deque
def search(s):
    xi = [0, -1, 0, 1]
    yi = [-1, 0, 1, 0]
    visit[s[0]][s[1]] = True
    Q.append(s)
    while Q:
        p = Q.popleft()
        for k in range(4):
            x, y = p[0]+xi[k], p[1]+yi[k]
            if x < 0 or x >= N or y < 0 or y >= N: continue
            if maze[x][y] == '0' and not visit[x][y]:
                visit[x][y] = True
                Q.append((x, y))
                D[x][y] = D[p[0]][p[1]] + 1
            elif maze[x][y] == '3':
                return D[p[0]][p[1]]
    return 0
    
    

T = int(input())

for t in range(1, T + 1):
    N = int(input())
    maze = [list(input()) for _ in range(N)]
    visit = [[False]*N for _ in range(N)]
    D = [[0]*N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if maze[i][j] == '2':
                sx, sy = i, j
    Q = deque()

    print('#{} {}'.format(t, search((sx, sy))))