#1259.금속막대
T = int(input())

for t in range(1, T + 1):
    n = int(input())
    n_list = list(map(int, input().split()))   # 입력
    arr = []
    for i in range(n):
        arr.append(n_list[2*i:2*i+2])         # 두개씩 나누기           

    for one in arr:
        result = []
        result.extend(one)
        for i in range(n):
            for two in arr:
                if result[-1] == two[0]:
                    result.extend(two)
        if len(result) == 2 * n:
            break

    print('#{} '.format(t), *result)  # 출력