def postorder(v):
    if node[v].isdecimal():
        return node[v]
    else:
        a = postorder(arr[v][0])
        b = postorder(arr[v][1])
        return str(eval(a+node[v]+b))

for t in range(1, 11):
    N = int(input())
    node = [0] * (N + 1)
    arr = [[0, 0] for _ in range(N + 1)]
    for n in range(1, N + 1):
        info = list(input().split())
        node[n] = info[1]
        if len(info) >=3:
            arr[n][0] = int(info[2])
            arr[n][1] = int(info[3])
    print('#{} {:1.0f}'.format(t, float(postorder(1))))
