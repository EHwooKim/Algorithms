from itertools import combinations
from collections import deque

def count_nodes(start, n, tree):
  count = 0
  visit = [False] * n
  dq = deque([start])
  while dq:
    a = dq.popleft()
    visit[a] = True
    count += 1
    for i in tree[a]:
      if not visit[i]:
        dq.append(i)
  return count

def solution(n, edges):
  delete_arr = list(combinations(range(n - 1), 2))
  for delete in delete_arr:
    start_node = []
    start_node += edges[delete[0]]
    start_node += edges[delete[1]]

    tree = [[] for _ in range(n)]
    for i in range(n - 1):
      if i in delete: continue
      edge = edges[i]
      a = edge[0]
      b = edge[1]
      tree[a].append(b)
      tree[b].append(a)

    count_arr = []
    for start in start_node:
      count_arr.append(count_nodes(start, n, tree))
    if count_arr[0] == count_arr[1] == count_arr[2] == count_arr[3]:
      return list(delete)
    


print(solution(9, [[0, 2], [2, 1], [2, 4], [3, 5], [5, 4], [5, 7], [7, 6], [6, 8]]))