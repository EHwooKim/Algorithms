def subtree(v):
    global count
    if v == 0: return
    count += 1
    subtree(arr[v][0])
    subtree(arr[v][1])

T = int(input())
for t in range(1, T + 1):
    E, N = map(int, input().split())
    info = list(map(int, input().split()))
    arr = [[0, 0] for _ in range(E + 2)]
    for i in range(0, E * 2, 2):
        if arr[info[i]][0]:
            arr[info[i]][1] = info[i + 1]
        else: arr[info[i]][0] = info[i + 1]
    count = 0
    subtree(N)
    print('#{} {}'.format(t, count))