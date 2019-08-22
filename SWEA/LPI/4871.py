# 다시 한번 볼까..

def check(s, g):
    stack = []
    visit[s] = True
    stack.append(s)
    while stack:
        if s == g:
            return 1
        for w in G[s]:
            if not visit[w]: 
                visit[w] = True
                stack.append(s)  
                s = w        
                break        
        else:                
            s = stack.pop()      
    return 0


T = int(input())   # 1 ~ 50

for t in range(1, T + 1):
    V, E = map(int, input().split()) # 5 ~ 50 / 4 ~ 1000
    G = [[] for _ in range(E + 1)]
    visit = [False] * (V + 1) 
    for e in range(E):
        s, g = map(int, input().split()) 
        G[s].append(g)
    s, g = map(int, input().split())
    print('#{} {}'.format(t, check(s, g)))