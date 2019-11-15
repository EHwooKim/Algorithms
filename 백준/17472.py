# 백준 다리만들기2
# 1. 섬(정점)을 찾는다 (N개)
# 2. 섬들을 연결하는 (가능한) 다리(간선)를 찾는다
# 3. 모든 섬들을 연결하려면 결합 컴포넌트가 되는데 필요한 최소의 간선 (트리의 간선수 = 노드수 -1)
# 4. 최소 신장 트리를 찾는다.
import pprint 
from collections import deque

# 섬의 정보 적기
def BFS(start):
    global island_num
    q = deque([start])
    while q:
        x, y= q.popleft()
        arr[x][y] = island_num
        visited[x][y] = False
        for i, j in d:
            dx, dy = x + i, y + j
            if 0 <= dx < N and 0 <= dy < M and arr[dx][dy] and visited[dx][dy]:
                arr[dx][dy] = island_num
                visited[dx][dy] = False
                q.append([dx, dy])

def calc_distance(x, y):
    for i, j in d:
        k = 0
        dx, dy = x + i, y + j
        if 0 <= dx < N and 0 <= dy < M and not arr[dx][dy]:
            while True:
                k += 1
                dx += i; dy += j
                if not 0 <= dx < N or not 0 <= dy < M:
                    break
                if arr[dx][dy] != 0:
                    if k >= 2 and island_distance[arr[x][y]][arr[dx][dy]] > k: 
                        island_distance[arr[x][y]][arr[dx][dy]] = k
                    break

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
visited = [[True] * M for _ in range(N)]
d = [[-1, 0], [0, 1], [1, 0], [0, -1]]
island_num = 1
for i in range(N):
    for j in range(M):
        if arr[i][j] and visited[i][j]:
            BFS([i, j])
            island_num += 1
island_distance = [[11] * (island_num) for _ in range(island_num)]

for i in range(N):
    for j in range(M):
        if arr[i][j]:
            calc_distance(i, j)
Edge = []
for i in range(1, island_num - 1):
    for j in range(1, island_num):
        if island_distance[i][j] != 11:
            Edge.append((i, j, island_distance[i][j]))

Edge.sort(key=lambda x: x[2])


p = [x for x in range(island_num)]
def find_set(x):
    if x != p[x]:
        p[x] = find_set(p[x])
    return p[x]

ans = cnt = 0
group = island_num-1
for u, v, w in Edge:
    a = find_set(u); b = find_set(v)
    if a != b:
        p[b] = a
        ans, cnt, group = ans + w, cnt + 1, group - 1
        if cnt == island_num - 2: break

if group == 1: print(ans)
else: print(-1)
