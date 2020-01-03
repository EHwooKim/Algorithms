T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
    day = arr[N] + M
    result = ((day % 7) + 3) % 7
    print(f'#{t} {result}')