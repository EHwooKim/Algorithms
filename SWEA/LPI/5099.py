from collections import deque

T = int(input())

for t in range(1, T + 1):
    N, M = map(int, input().split())
    Ci = list(map(int, input().split()))
    index = list(range(M))
    oven = deque()

    for i in range(N):
        oven.append(index.pop(0))

    while len(oven) >= 2:
        if Ci[oven[0]] // 2 != 0:
            Ci[oven[0]] //= 2
            oven.rotate(-1)
        else:
            oven.popleft()
            if not index: continue
            oven.appendleft(index.pop(0))
    print('#{} {}'.format(t, oven[0] + 1))