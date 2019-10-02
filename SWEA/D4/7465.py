T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [[] for _ in range(N+1)]
    visit = [False]* (N + 1)
    count = 0
    for _ in range(M):
        a, b = map(int, input().split())
        arr[a].append(b)
        arr[b].append(a)
    p = []
    for i in range(1, N+1):
        if visit[i]: continue
        p.append(i)
        visit[i] = True
        while p:
            q = p.pop(0)
            for j in arr[q]:
                if not visit[j]:
                    p.append(j)
                    visit[j] = True
        count += 1  
    print('#{} {}'.format(t, count))
    