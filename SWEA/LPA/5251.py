from collections import deque
T = int(input())
for t in range(1, T + 1):
    N, E = map(int, input().split())
    D = [0xffffff] * (N + 1)
    G = [[] for _ in range(N + 1)]
    for _ in range(E):
        s, e, w = map(int, input().split())
        G[s].append((e, w))
    Q = deque()
    Q.append(0)
    D[0] = 0

    while Q:
        u = Q.popleft()
        for v, w in G[u]:
            if D[v] >= D[u] + w:
                D[v] = D[u] + w
                Q.append(v)

    print('#{} {}'.format(t, D[N]))
