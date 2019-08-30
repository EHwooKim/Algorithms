def pre_check(k):
    if visit[k]:
        return False
    else:
        if pre[k] == []:
            return True
        else:
            for p in pre[k]:
                if not visit[p]:
                    return False
            return True

for t in range(1, 11):
    print('#{}'.format(t), end = ' ')
    V, E = map(int, input().split())
    info = list(map(int, input().split()))
    G = [[] for _ in range(V + 1)]
    pre = [[] for _ in range(V + 1)]
    visit = [False] * (V + 1)
    point = list(range(1, V +1))
    stack = []

    for i in range(E):
        G[info[i*2]].append(info[i*2+1])
        pre[info[i * 2 + 1]].append(info[i * 2])

    while point:
        for k in point:
            if pre_check(k):
                visit[k] = True ; print(k, end=' ')
                point.remove(k)
                stack.append(k)
            while stack:
                for j in G[k]:
                    if pre_check(j):
                        visit[j] = True ; print(j, end=' ')
                        point.remove(j)
                        stack.append(j)
                        k = j
                        break
                else:
                    k = stack.pop()
    print()
