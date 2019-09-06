import pprint
import copy
# 백준 색종이붙이기
def calc(k, can, money): # 거스름돈 가지고 재귀함수// 가능한 경우 수 모두
    if money > can: return
    if money == 0:
        cand.append(used[::]); return
    for i in range(6):
        if money - paper[k]*i >= 0:
            used[k] = i
            calc(k+1 , can-paper[k]*5, money - paper[k]*i)
            used[k] = 0
# TODO 여기는 문제없고

# 해당 크기 정사각형이 모두 1로 채워져있는지 확인하는거
def square(arr, x, y, k): # (x, y)시작점
    for i1 in range(x, x+k):
        for j1 in range(y, y+k):
            if i1>9 or j1>9 or arr[i1][j1] != 1:
                return False
    return True
# 해당 크기 정사각형을 모두 0으로 바꾸기
def make_0(arr,x, y, k): # (x, y)시작점
    for i0 in range(x, x+k):
        for j0 in range(y, y+k):
            arr[i0][j0] = 0

def check(arr):
# 배열을 돌다가 1을 만나면
    for i in range(10):
        for j in range(10):
            if arr[i][j]: # arr[i][j] == 1이면
                # 그 1을 기준으로 가장 큰 정사각형을 구한다, 5~1까지.
                for k in range(5, -1, -1):
                    if k == 0:
                        return False # 크기5부터 크기1까지 다 해보고 없으면 불가능한 케이스나 False리턴    
                    #다음을 만족하면 행동을 취하고 break                    
                    if square(arr, i, j, k) and c[5-k]: # TODO 나중에 cand 바꾸고, 인덱스 설정해주기
                        make_0(arr, i, j, k)
                        c[5-k] -=1
                        break
    # 한 사이클이 돌았을 때 색종이를 다 쓰지 못하면(넓이가 0이 안됐으면) False
    if sum(c): return False
    else: return True
    # 한 사이클이 다 돌고 색종이를 다 썼으면 True. 색종이 장수를 반환한다.


arr_input = [list(map(int, input().split())) for _ in range(10)] # 입력
total = 0
for i in range(10):
    total += sum(arr_input[i])
cand = []
used = [0]*5
paper = [25, 16, 9, 4, 1]
p = [5, 4, 3, 2, 1]
calc(0, 275, total) # cand에 넓이에 따라 가능한 경우 수 다 구하고
cand.sort(key = lambda x :sum(x))
for c in cand:
    arr_check = copy.deepcopy(arr_input)
    result = sum(c)
    if check(arr_check):
        print(result)
        break
else: print(-1) # 이거 실패시에만 어떻게 출력하지