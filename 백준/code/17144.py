# 백준 미세먼지
def diff():
    XY = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    tmp = [[0]*C for _ in range(R)]
    for i in range(R):
        for j in range(C):
            smog = arr[i][j]//5
            if smog > 0:
                for xy in XY:
                    x = i+xy[0]; y = j + xy[1]
                    if R > x >= 0 and C > y >=0 and arr[x][y] != -1:
                        tmp[x][y] += smog
                        arr[i][j] -= smog
    for i in range(R):
        for j in range(C):
            arr[i][j] += tmp[i][j]

def move():
    x, y = machine[0]
    while x-1 >= 0:
        arr[x][y] = arr[x-1][y]
        x, y = x-1, y
    while y+1 <= C-1:
        arr[x][y] = arr[x][y+1]
        x, y = x, y + 1
    while x+1 <= machine[0][0]:
        arr[x][y] = arr[x+1][y]
        x, y = x + 1, y
    while y-1 >= 1:
        arr[x][y] = arr[x][y-1]
        x, y = x, y-1 
    arr[x][y] = 0
    arr[x][y-1] = -1
    x, y = machine[1]
    while x+1 <= R-1:
        arr[x][y] = arr[x+1][y]
        x, y = x+1, y
    while y+1 <= C-1:
        arr[x][y] = arr[x][y+1]
        x, y = x, y + 1
    while x-1 >= machine[1][0]:
        arr[x][y] = arr[x-1][y]
        x, y = x - 1, y
    while y-1 >= 1:
        arr[x][y] = arr[x][y-1]
        x, y = x, y-1 
    arr[x][y] = 0
    arr[x][y-1] = -1

R, C, T = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(R)]
machine = [] 
for i in range(R):
    if arr[i][0] == -1:
        machine.append((i, 0))
        machine.append((i+1, 0))
        break
        
for _ in range(T):
    diff()
    move()

result = 2
for i in range(R):
    result += sum(arr[i])
print(result)