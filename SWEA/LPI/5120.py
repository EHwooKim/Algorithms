T = int(input())

for t in range(1, T + 1):
    N, M, K = map(int, input().split())
    arr = list(map(int, input().split()))
    idx = 0
    for i in range(1, K + 1):
        idx +=M
        idx = idx-len(arr) if idx > len(arr) else idx
        if idx ==len(arr):
            arr.insert(idx, arr[idx-1]+arr[0])
        else:
            arr.insert(idx, arr[idx-1]+arr[idx])
    
    print('#{}'.format(t), end=' ')
    
    print(*arr[::-1][0:10])
