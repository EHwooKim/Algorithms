T = int(input())

for t in range(1, T + 1):
    Time = list(map(int, input().split()))
    Time[0] += Time[2]
    Time[1] += Time[3]
    Time = Time[0:2]

    if Time[1] >= 60:
        Time[0] += 1 
        Time[1] -= 60
    if Time[0] >= 13:
        Time[0] -=12

    print(f'#{t}', *Time)