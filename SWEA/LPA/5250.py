# -- 준영
from queue import PriorityQueue

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    board = [list(map(int, input().split())) for _ in range(N)]
    D = [[0xfffff] * N for _ in range(N)]
    visit = [[0] * N for _ in range(N)]
    D[0][0] = 0
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    Q = PriorityQueue()
    Q.put((D[0][0], 0, 0))
    while not Q.empty():
        d, x, y = Q.get()
        if d > D[x][y] : continue
        visit[x][y] = True
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if -1 < nx < N and -1 < ny < N and not visit[nx][ny]:
                w = board[nx][ny] - board[x][y] + 1 if board[nx][ny] > board[x][y] else 1
                if D[nx][ny] > D[x][y] + w:
                    D[nx][ny] = D[x][y] + w
                    Q.put((D[nx][ny], nx, ny))
    print('#{} {}'.format(tc, D[N-1][N-1]))

# -- 순범
from collections import deque
for tc in range(1, int(input())+1):
    N = int(input())
    base = [list(map(int,input().split())) for _ in range(N)]
    D = [[0xffffff for _ in range(N)] for _ in range(N)]

    stck = deque([(0, 0)])
    D[0][0] = 0
    while stck:
        a, b = stck.popleft()
        for dx, dy in [(0, -1), (0, 1), (-1, 0), (1, 0)]:
            x, y = a + dx, b + dy
            if 0 <= x < N and 0 <= y < N:
                if base[x][y] > base[a][b]:
                    ap = base[x][y] - base[a][b]+1
                    if D[x][y] > D[a][b] + ap:
                        D[x][y] = D[a][b] + ap
                        stck.append((x, y))
                else:
                    if D[x][y] > D[a][b] + 1:
                        D[x][y] = D[a][b] + 1
                        stck.append((x, y))

    print("#{} {}".format(tc, D[N-1][N-1]))