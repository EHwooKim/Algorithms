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