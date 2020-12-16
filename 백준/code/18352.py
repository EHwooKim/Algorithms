from collections import deque 

N, M, K, X = map(int, input().split())
nodes = [[] for _ in range(N + 1)]
for _ in range(M):
  n, m = map(int, input().split())
  nodes[n].append(m)

distance = [-1] * (N + 1)
distance[X] = 0

q = deque([X])
while q:
  now = q.popleft()
  if distance[now] > K: break
  for node in nodes[now]:
    if distance[node] == -1:
      distance[node] = distance[now] + 1
      q.append(node)

chk = False
for i in range(1, N + 1):
  if distance[i] == K:
    print(i)
    chk = True
if not chk:
  print(-1)

