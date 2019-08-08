# 백준 10815 숫자카드
N = int(input())
N_list = set(map(int, input().split()))
M = int(input())
M_list = list(map(int, input().split()))

for m in range(M):
    if M_list[m] in N_list:
        M_list[m] = 1
    else:
        M_list[m] = 0

print(*M_list)


# # 통과는 했는데... 오래걸려... 너무...
# def bin_search(p, s): # (왼, 오, 찾기)
#     l = 0
#     r = len(p) - 1
#     while l <= r:
#         c = (l + r) // 2
#         if p[c] == s:
#             return 1
#         elif p[c] > s:
#             r = c -1
#         else: l = c + 1
#     return 0
#
# N = int(input())
# N_list = list(map(int, input().split()))
# M = int(input())
# M_list = list(map(int, input().split()))
# N_list.sort()
# for m in range(M):
#     M_list[m] = bin_search(N_list, M_list[m])
#
# print(*M_list)
