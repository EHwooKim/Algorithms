T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    W = map(int, input().split())
    T = map(int, input().split()) 
    W.sort(reverse=True)
    total = used = 0
    for w in W:
        for i in range(len(T)):
            if T[i] >= w and not used&(1<<i):
                total += w
                used |= 1<<i
                break
    print('#{} {}'.format(t, total))