def Quick(lo, hi):
    if lo >= hi: return
    i = lo -1
    for j in range(lo, hi):
        if arr[j] < arr[hi]:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    i += 1
    arr[i], arr[hi] = arr[hi], arr[i]
    Quick(lo, i - 1)
    Quick(i + 1, hi)


T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = list(map(int, input().split()))
    Quick(0, N-1)
    print('#{} {}'.format(t, arr[N//2]))

