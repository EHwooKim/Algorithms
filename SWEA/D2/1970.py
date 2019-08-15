T = int(input())

for t in range(1, T + 1):
    money = [50000, 10000, 5000, 1000, 500, 100, 50, 10]
    N = int(input())
    N = round(N, -1)
    for i in range(8):
        count, N = divmod(N, money[i])
        money[i] = count
    print(f'#{t}')
    print(*money)
