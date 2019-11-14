from collections import deque
import copy

def find(arr, rest_n):
    start_bfs = []
    for w in range(W):
        for h in range(H):
            if arr[h][w]:
                for rn in range(rest_n):
                    fx= h + rn
                    if 0 <= fx < H and arr[fx][w] >= 2:
                        start_bfs.append([fx, w, rn])
                        break
                break
    return start_bfs

def bomb(arr, start_point):
    bomb_list = deque([start_point])
    while bomb_list:
        bx, by, power = bomb_list.popleft()
        arr[bx][by] = 0
        for i, j in d:
            for k in range(1, power):
                dx, dy = bx + k * i, by + k * j
                if 0 <= dx < H and 0 <= dy < W and arr[dx][dy]:
                    if arr[dx][dy] == 1:
                        arr[dx][dy] = 0
                    elif arr[dx][dy] >= 2:
                        bomb_list.append([dx, dy, arr[dx][dy]])

def down(arr):
    for i in range(H-1, -1, -1):
        for j in range(W):
            if arr[i][j] == 0:
                for k in range(i, -1, -1):
                    if arr[k][j]:
                        arr[i][j], arr[k][j] = arr[k][j], arr[i][j]
                        break

def result_count(arr):
    count = 0
    for i in range(H):
        for j in range(W):
            if arr[i][j]: count += 1
    return count

def help_me(arr, N):
    global MIN
    cand_list = find(arr, N)
    if N == 0 or not cand_list:
        result = result_count(arr)
        if result != 0 and not cand_list:
            result -= N
        MIN = min(MIN, result)
        return
    for cand in cand_list:
        temp = copy.deepcopy(arr)
        bomb(temp, [cand[0], cand[1], arr[cand[0]][cand[1]]])
        down(temp)
        help_me(temp, N - (cand[2] + 1))


T = int(input())
for t in range(1, T + 1):
    N, W, H = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(H)]
    d = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    MIN = 0xffffff
    help_me(arr, N)
    print('#{} {}'.format(t, MIN))
