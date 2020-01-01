    
T = int(input())

for t in range(1, T + 1):
    N, M = map(int, input().split())
    points = [[] for _ in range(N + 1)]
    count = 0
    for _ in range(M):
        x, y = map(int, input().split())
        points[x].append(y)
        points[y].append(x)
    for i in range(1, N + 1):
        for j in points[i]:
            if j > i:
                for k in points[j]:
                    if k > j and i in points[k]:
                        count +=1
    print('#{} {}'.format(t, count))
 