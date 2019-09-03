def check(x):
    if x > max_num:
        x = list(str(x))
        if x != sorted(x):
            return False
        return True

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    A = list(map(int, input().split()))
    max_num = -1
    for i in range(N - 1):
        for j in range(i+1, N):
            if check(A[i]*A[j]):
                max_num = A[i]*A[j]
    print('#{} {}'.format(t, max_num))