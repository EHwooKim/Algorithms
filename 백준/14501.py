# 백준 퇴사 - 못풀었다아.
# def my_money(start, count, money):
#     global max_num
#     for i in range(start, N):
#         if arr[i][0] == -1:
#             max_num = max(max_num, money)
#             return
#         if count != 0:
#             count -= 1
#             continue
#         else: # count == 0
#             my_money(i+1, count+arr[i][0]-1, money + arr[i][1])

# N = int(input())
# arr = []
# for i in range(N):
#     d, m = map(int, input().split())
#     if i + d <= N:
#         arr.append((d, m))
#     else:arr.append((0, 0))
# N+=1; arr.append((-1,-1))
# print(arr)
# max_num = 0
# my_money(0, 0, 0)
# print(max_num)

#--------------------
# 최적화 문제. 
# n일에 상담을 할지 말지를 결정하면 되겠지 상담하기로 했으면 해당일값을 더하고 안하기로 했으면 무조건 1을 더해서 다음날로 가야겠지
# 마지막날같은
N = int(input())
arr = [(0,0)] + [tuple(map(int, input().split())) for _ in range(N)] # (상담일수, 돈)

ans = 0 # 돈 최대값 저장.
def backtrack(day, p): # day: 결정할 일, p:지금까지 이익
    
    if day > N + 1: return 
    if day == N + 1:
        global ans
        ans = max(ans, p)
        return
    # 재귀를 쓸 때 첫번째는 상담하는 경우, 두번째는 상담 안하는 경우로 나눠서 함수를 호출한다고 생각해봐
    # 상담을 하는 경우
    backtrack(day + arr[day][0], p + arr[day][1]) # 상담일과 돈을 더해서 넘기고
    # 상담을 하지 않는 경우
    backtrack(day + 1, p) # 돈은 그대로이고 상담일만 변하겠지

backtrack(1, 0)
print(ans)
