from collections import deque
def count_mine(x, y):
    count = 0
    for a, b in d:
        dx = x + a; dy = y + b
        if 0 <= dx < N and 0 <= dy < N and arr[dx][dy] == '*':
            count += 1
    arr[x][y] = count

def check_around_zero(zero):
    zero_bfs = deque([zero])
    non_zero_count = 0
    zero_count = 0    
    while zero_bfs:
        zx, zy = zero_bfs.popleft()
        counted[zx][zy] = False
        for a, b in d:
            dx = zx + a; dy = zy + b
            if 0 <= dx < N and 0 <= dy < N and counted[dx][dy]:
                counted[dx][dy] = False
                if arr[dx][dy]:
                    non_zero_count += 1
                else:
                    zero_bfs.append([dx, dy])
                    zero_count += 1
    return non_zero_count, zero_count

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = [list(input()) for _ in range(N)]
    counted = [[True] * N for _ in range(N)]
    d = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
    zero_num_mine = [0, 0, 0]
    zero_index = []
    result = 0
    for i in range(N):
        for j in range(N):
            if arr[i][j] != '*':
                count_mine(i, j)
                if arr[i][j]:
                    zero_num_mine[1] += 1
                else:
                    zero_num_mine[0] += 1
                    zero_index.append([i, j])
            else:
                counted[i][j] = False
                zero_num_mine[2] += 1
    for zero in zero_index:
        non_zero_return, zero_return = check_around_zero(zero)
        zero_num_mine[0] -= zero_return
        zero_num_mine[1] -= non_zero_return
    result = zero_num_mine[0] + zero_num_mine[1]
    print('#{} {}'.format(t, result))
