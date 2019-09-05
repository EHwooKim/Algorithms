# X = '123456'

# arr = range(len(X))
# result = []
# def comb(arr):
#     for i in range(1<<6):
#         a = []
#         for j in range(6):
#             if i&(1<<j):
#                 a.append(arr[j])
#         result.append(a)
# comb(arr)
# print(result)
# print(len(result))


arr = list(range(10)); N = len(arr); R = 1
cand = []
choose = []
def comb(k,start):
    if k == R:
        print(choose)
        cand.append(choose[::])
        return

    for i in range(start, N):
        choose.append(arr[i])
        comb(k + 1, i + 1)
        choose.pop()

comb(0, 0)
print(cand)
