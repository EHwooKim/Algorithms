T = int(input())
for t in range(1, T + 1):
    N = int(input())
    result = 'Odd' if N % 2 else 'Even'
    print(f'#{t} {result}')
