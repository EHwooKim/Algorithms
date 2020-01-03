def find(n):
    i = 1
    while True:
        if i ** 3 < n:
            i += 1
        elif i ** 3 == n:
            return i
        elif i ** 3 > n:
            return -1

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    print(f'#{t} {find(N)}')