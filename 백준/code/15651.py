def sequence(k, tmp):
    if k == M:
        print(*tmp); return        
    for i in range(N):
        sequence(k+1, tmp+arr[i])

N, M = map(int, input().split())
arr = list(map(str, range(1, N + 1)))

sequence(0, '')