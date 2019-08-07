# SWEA 1209
for test in range(10):
    t = int(input())
    X = []
    for x in range(100):
        X.append(list(map(int, input().split())))

    result = 0
    for i in range(100):
        sum_num1 = 0
        sum_num2 = 0
        for j in range(100):
            sum_num1 += X[i][j]
            sum_num2 += X[j][i]
        result = sum_num1 if sum_num1 > result else result
        result = sum_num2 if sum_num2 > result else result
    sum_num = 0
    for i in range(100):
        sum_num += X[i][99 - i]
        result = sum_num if sum_num > result else result
    sum_num = 0
    for i in range(100):
        sum_num += X[i][i]
        result = sum_num if sum_num > result else result

    print('#{} {}'.format(t,result))

