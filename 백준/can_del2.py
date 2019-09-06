def up(x, y, 색깔):
    while x-1>=0 and arr[x-1][y]!=6:
        if arr[x-1][y] ==0:
            arr[x-1][y] = 색깔    
            x -= 1

arr = [[0, 6, 0], [0, 0, 0], [0, 0, 0]]

up(2, 1, 100)


print(arr)