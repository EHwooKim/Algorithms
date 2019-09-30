def bin_search(l, r, m, switch):
    global count
    while l <= r:
        mid = (l + r) // 2
        if arr_n[mid] == m:
            count +=1
            break
        elif m < arr_n[mid] and (switch == 0 or switch == 1):
            l, r, switch = l, mid - 1, -1
        elif arr_n[mid] < m and (switch == 0 or switch == -1):
            l, r, switch = mid + 1, r, 1
        else:
            break

T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr_n = list(map(int, input().split()))
    arr_n.sort()
    arr_m = list(map(int, input().split()))
    count = 0
    
    for m in arr_m:
        if m in arr_n:
            bin_search(0, N - 1, m, 0)
    print('#{} {}'.format(t, count))
        



