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

#--------------------------
# disjoint_set으로 풀기
T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    p = [x for x in range(N + 1)]  # 1 ~ N, make-set(모든 정점)

    def find_set(x):
        if x != p[x]:
            p[x] = find_set(p[x])  # path-compression
        return p[x]

    ans = N
    for _ in range(M):
        u, v = map(int, input().split())
        a = find_set(u); b = find_set(v)
        if a != b:
            p[b] = a
            ans -= 1
    print('#{} {}'.format(t, ans))