# ?? 15650
def sequence(k, tmp):
    if len(tmp) == M:
        print(*tmp); return
    for i in range(k, N):
        sequence(i + 1, tmp+str(arr[i]))

N, M = map(int, input().split())
arr = list(range(1, N + 1))
sequence(0, '')