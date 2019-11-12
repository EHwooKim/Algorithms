# 뭔가 조금씩 이상한데..?
# -- 크루스칼
def find_set(x):
    if x != p[x]:
        p[x] = find_set(p[x])
    return p[x]    

T = int(input())
for t in range(1, T + 1):
    V, E = map(int, input().split())
    p = [x for x in range(V + 1)]
    G = []

    result = 0

    for _ in range(E):
        G.append(tuple(map(int, input().split())))  # s, e, n
    G.sort(key= lambda x: x[2])

    for s, e, n in G:
        a = find_set(s); b = find_set(e)
        if a != b:
            result += n
            p[b] = a
        
    print('#{} {}'.format(t, result))


#--프림

T = int(input())
for t in range(1, T + 1):
    V, E = map(int, input().split())
    G = [[] for _ in range(V + 1)]
    key = [0xffffff] * (V + 1)
    visit = [False] * (V + 1)
    cnt = 0
    result = -0xffffff

    for _ in range(E):
        s, e, n = map(int, input().split())
        G[s].append((e, n))
        G[e].append((s, n))

    while cnt <= V:
        u, v = 0, 0xffffff
        for i in range(len(key)):
            if not visit[i] and v > key[i]:
                u, v = i, key[i]
        visit[u] = True
        result += v

        for a, b in G[u]:
            if not visit[a] and b < key[a]:
                key[a] = b
        cnt += 1
    print('#{} {}'.format(t, result))