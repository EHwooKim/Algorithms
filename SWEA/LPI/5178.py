def order(v):
    if arr[v]:
        return arr[v]
    else:
        a = order(v*2)
        b = order(v*2+1) if v*2+1 <= N else 0
        arr[v] = a + b
        return arr[v]

T = int(input())
for t in range(1, T + 1):
    N, M, L = map(int, input().split()) # N 노드, M 리프노드, L 출력할 노드
    arr = [0] * (N + 1)
    for _ in range(M):
        n, num = map(int, input().split())
        arr[n] = num
    order(1)
    print('#{} {}'.format(t, arr[L]))