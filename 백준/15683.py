import pprint
N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
for i in range(N):
    for j in range(M):
        if arr[i][j] == 5:
     
pprint.pprint(arr)