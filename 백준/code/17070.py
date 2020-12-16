# 백준 파이프 옮기기1
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
count = 0
# (0, 1) 시작해서 (N-1, N-1) 도착시키기.
def go(x, y, s): # x좌표, y좌표, 상태
    global count
    if x == N-1 and y == N-1: # 도착하면 끝 count +1  끝내자
        count += 1
        return
    if (s==1 or s==2) and y+1 < N and not arr[x][y+1]: # 앞으로 나아갈 수 있는지 체크하고
        go(x, y+1, 1) # 이동 가능한 방법으로 나아가자!
    if x+1<N and y+1 <N and not arr[x][y+1] and not arr[x+1][y+1] and not arr[x+1][y]:
        go(x+1, y+1, 2)
    if (s==2 or s==3) and x+1 < N and not arr[x+1][y]:
        go(x+1, y, 3)

go(0, 1, 1) # (0,1)시작, 현재상태 1로 시작.
print(count)