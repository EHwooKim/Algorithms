# ?? 15649

def sequence(k, used, tmp):
    if k == M:
        print(*tmp); return
    for i in range(N):
        if used & (1<<i): continue
        sequence(k + 1, used|(1<<i), tmp+str(arr[i]))

N, M = map(int, input().split())
arr = list(range(1, N + 1))
sequence(0, 0, '')