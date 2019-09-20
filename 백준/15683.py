# 선생님코드

dx = [-1, 1, 0, 0]  # 상(0), 하(1), 좌(2), 우(3)
dy = [0, 0, -1, 1]
dir = [ [[0]],
        [[0], [1], [2], [3]],                           # (상), (하), (좌), (우)
        [[0, 1], [2, 3]],                               # (상, 하), (좌, 우)
        [[0, 2], [0, 3], [1, 2], [1, 3]],               # (상, 좌), (상, 우), (하, 좌), (하, 우)
        [[0, 2, 3], [1, 2, 3], [0, 1, 2], [0, 1, 3]],   # (상, 좌, 우), (하, 좌, 우), (상, 하, 좌), (상, 하, 우)
        [[0, 1, 2, 3]]                                  # (상, 하, 좌, 우)
       ]

def setValue(x, y, lst, val):
    for d in lst:
        tx, ty = x + dx[d], y + dy[d]
        while 0 <= tx < N and 0 <= ty < M and MAP[tx][ty] != 6:
            visit[tx][ty] += val
            tx, ty = tx + dx[d], ty + dy[d]

def backtrack(k, n): # k: 현재 카메라 cctv[k]
    global MIN
    if k == n:
        cnt = 0
        for i in range(N):
            for j in range(M):
                if MAP[i][j] == 0 and visit[i][j] == 0:
                    cnt += 1
        MIN = min(MIN, cnt)
    else:
        x, y, t = cctv[k] # k번째 카메라의 위치와 종류
        for lst in dir[t]:
            setValue(x, y, lst, 1)

            backtrack(k + 1, n)

            setValue(x, y, lst, -1)

N, M = map(int, input().split())
MAP = []
cctv = []
for i in range(N):
    MAP.append(list(map(int, input().split())))
    for j in range(M):
        if 0 < MAP[i][j] < 6:
            cctv.append((i, j, MAP[i][j]))

visit = [[0] * M for _ in range(N)]  # 감시 영역 저장
MIN = N * M

backtrack(0, len(cctv))  # 카메라의 개수만큼
print(MIN)


# ----- 내 코드.. 실패..
# import pprint
# def up(x, y, 색깔):
#     while x-1>=0 and arr[x-1][y]!=6:
#         if arr[x-1][y] ==0:
#             arr[x-1][y] = 색깔    
#         x -= 1
# def right(x, y, 색깔):
#     while y+1<=M-1 and arr[x][y+1]!=6:
#         if arr[x][y+1] ==0:
#             arr[x][y+1] = 색깔    
#         y += 1
# def down(x, y, 색깔):
#     while x+1<=N-1 and arr[x+1][y]!=6:
#         if arr[x+1][y] ==0:
#             arr[x+1][y] = 색깔    
#         x += 1
# def left(x, y, 색깔):
#     while y-1>=0 and arr[x][y-1]!=6:
#         if arr[x][y-1] ==0:
#             arr[x][y-1] = 색깔    
#         y -= 1    

# N, M = map(int, input().split())
# arr = [list(map(int, input().split())) for _ in range(N)]
# cctv = []
# for i in range(N):
#     for j in range(M):
#         if arr[i][j] == 4 or arr[i][j] == 5: # 어차피 5일때는 다 칠해야하니까 이렇게 해놓고 시작하자
#             up(i, j, 7); right(i, j, 7); down(i, j, 7); left(i, j, 7)  
#         elif arr[i][j] in range(1, 5):
#             cctv.append((i, j, arr[i][j]))
# pprint.pprint(arr)
# print(cctv)
# len_c = len(cctv)


# def go():
#     for i in range(len_c):

