for _ in range(10):
    t = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]
    col=[]
    for j in range(100):
        if arr[0][j] !=0:
            col.append(j)

    for j in range(len(col)):
        result = col[j]
        for i in range(100):
            if col[j] != 99 and arr[i][col[j]+1] == 1: 
                j += 1
            elif col[j] != 0 and arr[i][col[j]-1] == 1:
                j -= 1            
        if arr[99][col[j]] == 2:
            break
    print('#{} {}'.format(t, result))

    #----

    x = y = 0 # x 행, y 열
    for i in range(100):
        if arr[99][i] == 2:
            x, y = 99, i
            break

# 갈림길에서 어느쪽으로 갈지 해결하는 방법    
    dir = 0  # 방향 정보 0: 위 1: 왼쪽 2: 오른쪽 
    while x:
        if dir != 2 and y - 1 >= 0 and arr[x][y - 1]: 
            y , dir = y - 1, 1 # 왼쪽으로 가고 방향정보 바까주기
        elif dir != 1 and y + 1 < 100 and arr[x][y + 1]:
            y, dir = t + 1, 2
        else:
            x, dir = x -1, 0

# 재귀, 지나온 길은 0으로 바꿔서 돌아가지 못하게
    def DFS(x, y):
        if x == 0: return y
        arr[x][y] = 0
        if y - 1 >=0 and arr[x][y-1]:
            return DFS(x, y - 1)
        elif y + 1 < 100 and arr[x][y+1]:
            return DFS(x, y + 1)
        else:
            return DFS(x - 1, y)