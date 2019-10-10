# def inorder(v):
#     global result
#     if v == 0: return
#     inorder(arr[v][1])
#     result += arr[v][0]
#     inorder(arr[v][2])

# for t in range(1, 11):
#     N = int(input())
#     arr = [[] for _ in range(N + 1)]
#     for n in range(1, N + 1):
#         info = list(input().split())
#         info += ['0'] * (4 - len(info))
#         arr[n].append(info[1])
#         arr[n].append(int(info[2]))
#         arr[n].append(int(info[3]))
#     result = ''
#     inorder(1)
#     print('#{} {}'.format(t, result))

print(int(0))