def perm(k, n, used, cur_sum): 
    global MIN
    if cur_sum >= MIN: return
    if k == n:
        MIN = cur_sum; return
    for i in range(N):
        if used & (1 << i): continue  
        perm(k + 1, n, used | (1 <<i), cur_sum + N_list[k][i]) 
        
        
T = int(input())
for t in range(1, T + 1):
    N = int(input())
    N_list =[list(map(int, input().split())) for _ in range(N)]
    MIN = 0xffffff

    perm(0, N, 0, 0)  
    print('#{} {}'.format(t, MIN))