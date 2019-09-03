def move(arr, S):
    global N
    if S == 'up':
        for x in range(1, N):
            for y in range(N):
                if arr[x-1][y] == 0:
                    arr[x-1][y] += arr[x][y]
                    arr[x][y] = 0
                elif arr[x-1][y] == arr[x][y] and (check[x-1][y] and check[x][y]): 
                    arr[x-1][y] += arr[x][y]
                    arr[x][y] = 0
                    check[x-1][y] = False
    elif S == 'down':
        for x in range(N-2, -1, -1):
            for y in range(N):
                if arr[x+1][y] == 0:
                    arr[x+1][y] += arr[x][y]
                    arr[x][y] = 0                
                elif arr[x+1][y] == arr[x][y] and (check[x+1][y] and check[x][y]): 
                    arr[x+1][y] += arr[x][y]
                    arr[x][y] = 0
                    check[x+1][y] = False
    elif S == 'left':
        for x in range(N):
            for y in range(1, N):
                if arr[x][y-1] == 0:
                    arr[x][y-1] += arr[x][y]
                    arr[x][y] = 0                        
                elif arr[x][y-1] == arr[x][y] and (check[x][y-1] and check[x][y]): 
                    arr[x][y-1] += arr[x][y]
                    arr[x][y] = 0        
                    check[x][y-1] = False
    elif S == 'right':
        for x in range(N):
            for y in range(N-2, -1, -1):
                if arr[x][y+1] == 0:
                    arr[x][y+1] += arr[x][y]
                    arr[x][y] = 0                   
                elif arr[x][y+1] == arr[x][y] and (check[x][y+1] and check[x][y]): 
                    arr[x][y+1] += arr[x][y]
                    arr[x][y] = 0      
                    check[x][y+1] = False     
                    
T = int(input())
for t in range(1, T + 1):
    N, S = input().split()
    N = int(N)
    arr = [list(map(int, input().split())) for _ in range(N)]
    check = [[True]*N for _ in range(N)]
    for _ in range(N-1):
        move(arr, S)
    print('#{}'.format(t))
    for i in range(N):
        print(*arr[i])