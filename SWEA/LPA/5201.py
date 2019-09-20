T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    W = list(map(int, input().split())) 
    T = list(map(int, input().split())) 
    W.sort(reverse=True)
    c = 0
    used = 0
    for w in W:
        for i in range(len(T)):
            if T[i] >= w and not used&(1<<i):
                used |= 1<<i
                c += w
                break
    print('#{} {}'.format(t, c))