def check(start, end):
    Q.append(start)
    visit[start] = True
    while Q:
        v = Q.pop(0)
        for w in G[v]:
            if visit[w]: continue
            visit[w] = True
            Q.append(w)
            D[w] = D[v] + 1
    return D[end]
        
        
T = int(input())

for t in range(1, T + 1):
    V, E = map(int, input().split())
    G = [[] for _ in range(V + 1)]
    visit = [False] * (V + 1)
    D = [0] * (V + 1)
    Q = []
    for _ in range(E):
        s, d = map(int, input().split())
        G[s].append(d)
        G[d].append(s)
    s, g = map(int, input().split())

    print('#{} {}'.format(t, check(s, g)))
