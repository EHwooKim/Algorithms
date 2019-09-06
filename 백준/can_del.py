#--------------- 선생님코드 ---------------
def getNext(x, y):
    for i in range(x, 10):
        for j in range(10):
            if arr[i][j] == 0: continue
            return (i, j)
    return (10, 10)

def isPossible(x, y, size):
    if x + size > 10 or y + size > 10: return False
    possible = True
    for i in range(x, x + size):
        for j in range(y, y + size):
            if arr[i][j] == 0: return False
    return True

def setValue(x, y, size, val):
    for i in range(x, x + size):
        for j in range(y, y + size):
            arr[i][j] = val

def backtrack(k, x, y):
    global ans
    if k >= ans: return True

    r, c = getNext(x, y)    # 색종이 붙일 위치 찾기(좌상단 좌표)

    if r == 10:
        ans = min(ans, k)
        return True

    ret = False
    for i in range(5, 0, -1):
        if paper[i] and isPossible(r, c, i):
            setValue(r, c, i, 0)
            paper[i] -= 1
            ret | = backtrack(k + 1, r, c)
            paper[i] += 1
            setValue(r, c, i, 1)

    return ret
    
paper = [0, 5, 5, 5, 5, 5]
arr = [list(map(int, input().split())) for _ in range(10)]

ans = 101
if backtrack(0, 0, 0):
    print(ans)
else:
    print(-1)


#-------- 틀린 내 코드..
# import pprint
# import copy
# def calc(k, can, money): 
#     if money > can: return
#     if money == 0:
#         cand.append(used[::]); return
#     for i in range(6):
#         if money - paper[k]*i >= 0:
#             used[k] = i
#             calc(k+1 , can-paper[k]*5, money - paper[k]*i)
#             used[k] = 0

# def square(arr, x, y, k): 
#     for i1 in range(x, x+k):
#         for j1 in range(y, y+k):
#             if i1>9 or j1>9 or arr[i1][j1] != 1:
#                 return False
#     return True
# def make_0(arr,x, y, k):
#     for i0 in range(x, x+k):
#         for j0 in range(y, y+k):
#             arr[i0][j0] = 0

# def check(arr):
#     for i in range(10):
#         for j in range(10):
#             if arr[i][j]: 
#                 for k in range(5, -1, -1):
#                     if k == 0:
#                         return False  
#                     if square(arr, i, j, k) and c[5-k]:
#                         make_0(arr, i, j, k)
#                         c[5-k] -=1
#                         break
#     if sum(c): return False
#     else: return True

# arr_input = [list(map(int, input().split())) for _ in range(10)]
# total = 0
# for i in range(10):
#     total += sum(arr_input[i])
# cand = []
# used = [0]*5
# paper = [25, 16, 9, 4, 1]
# p = [5, 4, 3, 2, 1]
# calc(0, 275, total)
# cand.sort(key = lambda x :sum(x))
# pprint.pprint(cand)
# for c in cand:
#     arr_check = copy.deepcopy(arr_input)
#     result = sum(c)
#     if check(arr_check):
#         print(result)
#         break
# else: print(-1)

#--- 다른 방법...
# def back(덮을행렬, 색종이장수, 시작x, 시작y):
#     if not sum(색종이장수): 
#         return True
#     for i in range(시작x, 10):
#         for j in range(시작y, 10):
#             if 덮을행렬[i][j]:
#                 for k in range(5, -1, -1):
#                     if k == 0:
#                         return False
#                     if square(덮을행렬, i, j, k) and 색종이장수[5-k]:
#                         덮을행렬2 = make_0(덮을행렬,i, j, k)
#                         색종이장수2 = 색종이장수
#                         색종이장수2[5-k] -= 1
#                         back(덮을행렬2, 색종이장수2, i, j)