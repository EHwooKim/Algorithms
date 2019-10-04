def money(k, total):
    global MIN
    if total < MIN: MIN = total
    for i in range(k, len(arr)-2):
        if arr[i] and sum(arr[i:i+3]) > tm:
            money(i+3, total - sum(arr[i:i+3]) + tm)

T = int(input())
for t in range(1, T + 1):
    d, m, tm, MIN = map(int, input().split())
    arr = list(map(lambda x: min(int(x) * d, m), input().split())) + [0, 0]
    money(0, sum(arr))
    print('#{} {}'.format(t, MIN))