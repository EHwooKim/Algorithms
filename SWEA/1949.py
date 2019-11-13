d = [[1, 0], [0, 1], [0, -1], [-1, 0]]
def climbing(x, y, count, shoveling):
    global result
    result = max(result, count)
    for i, j in d:
        dx = x + i; dy = y + j
        if 0 <= dx < N and 0<= dy < N and visited[dx][dy]:
            if mountain[dx][dy] < mountain[x][y]:
                visited[dx][dy] = False
                climbing(dx, dy, count + 1, shoveling)
                visited[dx][dy] = True
            elif mountain[dx][dy] >= mountain[x][y] and shoveling:
                for s in range(1, K + 1):
                    mountain[dx][dy] -= s
                    if mountain[dx][dy] < mountain[x][y]:
                        visited[dx][dy] = False
                        climbing(dx, dy, count + 1, False)
                        visited[dx][dy] = True
                    mountain[dx][dy] += s
T = int(input())
for t in range(1, T + 1):
    N, K = map(int, input().split())
    visited = [[True]*N for _ in range(N)]    
    mountain = []
    peaks = []
    max_height = result = 0    
    for _ in range(N):
        arr = list(map(int, input().split()))
        max_height = max(max_height, max(arr))
        mountain.append(arr)
    for i in range(N):
        for j in range(N):
            if mountain[i][j] == max_height:
                peaks.append([i, j])
    for x, y in peaks:
        visited[x][y] = False
        climbing(x, y, 0, True)
        visited[x][y] = True
    
    print('#{} {}'.format(t, result+1))

