def idiot(k, total):
    global MIN
    if total >= B:
        MIN = min(MIN, total-B); return
    for i in range(k, N):
        idiot(i+1, total + arr[i])

T = int(input())
for t in range(1, T + 1):
    N, B = map(int, input().split())
    arr = list(map(int, input().split()))
    MIN = 0xffffff
    idiot(0,0)
    print(f'#{t} {MIN}')