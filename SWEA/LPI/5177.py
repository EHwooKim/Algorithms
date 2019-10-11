def push(item):
    global top
    top += 1
    H[top] = item
    c, p = top, top // 2
    while p:
        if H[p] > H[c]: 
            H[p], H[c] = H[c], H[p]
        else:
            break
        c = p
        p = c // 2

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    info = list(map(int, input().split()))
    H = [0] * (N+1)
    top  = 0
    result = 0
    for i in info:
        push(i)
    while top:
        top //= 2
        result += H[top]
    print('#{} {}'.format(t, result))
