T = int(input())
for t in range(1, T + 1):
    bus = [0] * 5001
    N = int(input())
    for _ in range(N):
        A, B = map(int, input().split())
        for i in range(A, B + 1):
            bus[i] += 1
    P = int(input())
    print('#{}'.format(t), end=' ')
    for _ in range(P):
        num = int(input())
        print(bus[num], end=' ')
    print()
