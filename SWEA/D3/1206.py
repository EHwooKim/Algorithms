for t in range(1, 11):
    test = int(input())
    buildings = list(map(int, input().split()))
    result = 0
    for i in range(test):
        if buildings[i] > 0:
            max_height01 = buildings[i - 1] if buildings[i - 1] > buildings[i - 2] else buildings[i - 2]
            max_height02 = buildings[i + 1] if buildings[i + 1] > buildings[i + 2] else buildings[i + 2]
            max_height = max_height01 if max_height01 > max_height02 else max_height02
            result += buildings[i] - max_height if buildings[i] - max_height > 0 else 0

    print('#{} {}'.format(t, result))



#----



for t in range(1, 11):
    test = int(input())
    buildings = list(map(int, input().split()))
    result = 0
    for i in range(test):
        if buildings[i] > 0:
            for floor in range(buildings[i], 0, -1):
                if buildings[i - 1] < floor and buildings[i - 2] < floor and buildings[i + 1] < floor and buildings[i + 2] < floor:
                    result += 1
                else:
                    break

    print('#{} {}'.format(t, result))

