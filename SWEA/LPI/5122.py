def edit(option):
    if option[0] =='I':
        arr.insert(int(option[1]),int(option[2]))
    elif option[0] =='D':
        arr.pop(int(option[1]))
    else:
        arr[int(option[1])] = int(option[2])



T = int(input())

for t in range(1, T + 1):
    N, M, L = map(int, input().split())
    arr = list(map(int, input().split()))
    for _ in range(M):
        option = list(input().split())
        edit(option)
    if L >= len(arr):
        print('#{} -1'.format(t))
    else:
        print('#{} {}'.format(t, arr[L]))