import pprint
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

arr = [list(map(int, input().split())) for _ in range(10)] # 입력
total = 0
for i in range(10):
    total += sum(arr[i])
cand = []
used = [0]*5
paper = [25, 16, 9, 4, 1]
p = [5, 4, 3, 2, 1]


calc(0, 275, total) # cand에 넓이에 따라 가능한 경우 수 다 구하고
cand.sort(key = lambda x :sum(x))
pprint.pprint(cand)
