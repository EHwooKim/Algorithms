def check(arr):
    for i in range(10):
        if arr[i] == 3 or (i <= 7 and arr[i] >= 1 and arr[i+1] >=1 and arr[i+2] >=1):
            return True
        
T = int(input())
for t in range(1, T + 1):
    card = list(map(int, input().split()))
    p =[[0]*10, [0]*10]
    switch = winner = 0    
    for c in card:
        p[switch][c] += 1
        if check(p[switch]):
            winner = switch + 1; break
        switch ^= 1
    print('#{} {}'.format(t, winner))
