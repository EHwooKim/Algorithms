def car(n, fuel, count):
    global min_num
    if count > min_num: return
    if n >= arr[0]:
        min_num = min(min_num, count); return
    car(n + 1, arr[n]-1, count + 1)
    if fuel >= 1:
        car(n+1, fuel - 1, count)

T = int(input())
for t in range(1, T + 1):
    arr = list(map(int, input().split()))
    min_num = 0xffffff
    car(2, arr[1]-1, 0)
    print('#{} {}'.format(t, min_num))
