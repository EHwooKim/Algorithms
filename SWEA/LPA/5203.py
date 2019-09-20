def check(arr):
    for i in range(10):
        if arr[i] == 3 or (i <= 7 and arr[i] >= 1 and arr[i+1] >=1 and arr[i+2] >=1):
            return True
        
T = int(input())
for t in range(1, T + 1):
    card = list(map(int, input().split()))
    player = [[0]*10, [0]*10]
    switch = 1
    winner = 0
    for num in card:
        p = player[switch] 
        p[num] += 1
        if check(p):
            winner = switch + 1
            break
        switch ^= 1
    print('#{} {}'.format(t, winner))
