from collections import deque

def solution(n, vertex):
  nodes = [[] for _ in range(n + 1)]
  distance = [-1] * (n + 1)
  distance[1] = 0
  for v, w in vertex:
    nodes[v].append(w)
    nodes[w].append(v)
  q = deque([1])
  while q:
    n = q.popleft()
    for node in nodes[n]:
      if (distance[node] == -1):
        q.append(node)
        distance[node] = distance[n] + 1
  return distance.count(max(distance))


print(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	))
