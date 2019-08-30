T = int(input())

for t in range(1, T + 1):
    str1 = input()
    str2 = input()
    result = {}

    for i in str1:
        result[i]=0
    for j in str2:
        if j in result.keys():
            result[j] += 1

    max_value = 0
    for value in result.values():
        if value > max_value:
            max_value = value

    print('#{} {}'.format(t, max_value))



