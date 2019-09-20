def slave(k, r, used): 
    global max_p
    if r < max_p or r == 0: return
    if k == N: 
        max_p = r; return
    for i in range(N):
        if used & (1<<i): continue
        slave(k+1, r*(arr[k][i]), used|(1<<i))

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = [list(map(lambda x: int(x)/100, input().split())) for _ in range(N)]
    max_p = 0
    slave(0, 1, 0)
    print('#{0} {1:.6f}'.format(t, max_p*100))