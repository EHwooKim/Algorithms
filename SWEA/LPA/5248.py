T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr = list(map(int, input().split()))
    p = [x for x in range(N + 1)]
    result = N
    def find_set(x):
        if x != p[x]:
            p[x] = find_set(p[x])
        return p[x]

    for i in range(M):
        a, b = arr[i*2], arr[i*2+1]
        A, B = find_set(a), find_set(b)
        if A != B:
            p[B] = A
            result -= 1

    print('#{} {}'.format(t, result))    
