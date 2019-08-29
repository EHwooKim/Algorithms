def check(start):
    max_D = 0
    Q.append(start)
    visit[start] = True
    while Q:
        v = Q.pop(0)
        for w in G[v]:
            if visit[w]: continue
            visit[w] = True
            Q.append(w)
            D[w] = D[v] + 1
            max_D = max(D[w], max_D)
    return max_D

    
for t in range(1, 11):
    N, S = map(int, input().split())
    arr = list(map(int, input().split()))
    G = [[]for _ in range(101)]
    D = [0] * 101
    Q = []
    visit = [False] * 101
    for i in range(N//2):
        G[arr[i * 2]].append(arr[i * 2 + 1])

    max_D = check(S)
    for i in range(100, 0, -1):
        if D[i] == max_D:
            print('#{} {}'.format(t, i))
            break
