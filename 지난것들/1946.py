T = int(input())

for t in range(1, T + 1):
    print('#{}'.format(t))
    N = int(input())
    result = ''

    for n in range(N):
        Ci, Ki = input().split()
        result += Ci * int(Ki)

    for p in range(len(result)//10+1):
        print(result[p * 10:(p+1) * 10])