def mergeSort(lo, hi):
    global count
    if lo == hi: return
    mid = (lo + hi - 1)>>1
    mergeSort(lo, mid)
    mergeSort(mid + 1, hi)

    i, j, k = lo, mid + 1, lo
    if arr[mid] > arr[hi]:
        count += 1
    while i <= mid and j <= hi:
        if arr[i] < arr[j]:
            tmp[k] = arr[i]; k, i = k + 1, i + 1
        else:
            tmp[k] = arr[j]; k, j = k + 1, j + 1
    while i <= mid:
        tmp[k] = arr[i]; k, i = k + 1, i + 1
    while j <= hi:
            tmp[k] = arr[j]; k, j = k + 1, j + 1
    for i in range(lo, hi + 1):
        arr[i] = tmp[i]


T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = list(map(int, input().split()))
    tmp = [0] * N
    count = 0
    mergeSort(0, N - 1)
    print('#{} {} {}'.format(t, arr[(N//2)], count))
