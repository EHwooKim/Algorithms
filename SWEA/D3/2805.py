T = int(input())

for t in range(1, T + 1):
    N = int(input())
    arr = [list(map(int,list(input()))) for _ in range(N)]
    result = 0
    n = (N-1)//2 + 2  

    for i in range(N): 
        if i < ((N+1)//2):  
            n -= 1 
            result += sum(arr[i][n-1:N-n+1])
        else:
            n += 1
            result += sum(arr[i][n-1:N-n+1])
    print('#{} {}'.format(t, result))