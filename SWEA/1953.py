from collections import deque
def BFS(start):
    global count
    q = deque([start])
    arr[R][C] = 0
    while q:
        x, y, type, time = q.popleft()
        if time == L + 1:
            break
        count += 1
        for index_d in OUT[type]:
            dx = x + d[index_d][0]; dy = y + d[index_d][1]
            if 0 <= dx < N and 0 <= dy < M and arr[dx][dy] in IN[index_d]:
                q.append([dx, dy, arr[dx][dy], time + 1])
                arr[dx][dy] = 0

T = int(input())
for t in range(1, T + 1):
    N, M, R, C, L = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    d = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    OUT = [[], [0, 1, 2, 3], [0, 2], [1, 3], [0, 1], [1, 2], [2, 3], [0, 3]]
    IN = [[1, 2, 5, 6], [1, 3, 6, 7], [1, 2, 4, 7], [1, 3, 4, 5]]
    count = 0
    BFS([R, C, arr[R][C], 1])
    print('#{} {}'.format(t, count))