#1259.금속막대
T = int(input())

for t in range(1, T + 1):
    n = int(input())
    n_list = list(map(int, input().split()))   # 입력
    x = []
    y = []
    for i in range(2*n):
        if i % 2:
            y.append(n_list[i])
        else:
            x.append(n_list[i])
    arr = list(zip(x, y))                        # 두개씩 나누기

    for one in arr:
        result = []
        result.append(one)
        for i in range(n):
            for two in arr:
                if result[-1][1] == two[0]:
                    result.append(two)
        if len(result) == n:
            break

    print('#{}'.format(t), end=' ')  # 출력
    for item in result:
        print(*item, end=' ')
    print()
