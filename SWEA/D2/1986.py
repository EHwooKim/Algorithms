T = int(input())

for t in range(1, T + 1):
    N = int(input())
    result = 0
    for n in range(1, N + 1):
        result += n if n%2 else -n

    print(f'#{t} {result}')
