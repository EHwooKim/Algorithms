from collections import deque
T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    visit = [False] * 1000001
    Q = deque()
    result = 0
    Q.append((N,0))
    visit[N] = True

    while Q:
        num, count = Q.popleft()
        if num == M:
            result = count
            break
        op = [1, -1, num, -10]
        for o in op:
            now = num + o
            if 0 <= now <= 1000000 and not visit[now]:
                Q.append((now, count+1))
                visit[now] = True

    print('#{} {}'.format(t, result))
