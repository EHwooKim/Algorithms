T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    visit = [False] * (N + 1)
    P = [[] for _ in range(N + 1)]
    for _ in range(M):
        a, b = map(int, input().split())
        P[a].append(b)
        P[b].append(a)

    count = -1
    Q = []
    Q.append((1, 0))
    visit[1] = True
    while Q:
        u = Q.pop(0)
        if u[1] >= 3:
            break
        count += 1
        for v in P[u[0]]:
            if not visit[v]:
                Q.append((v, u[1]+1))
                visit[v] = True
    print('#{} {}'.format(t, count))
