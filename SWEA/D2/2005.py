T = int(input())
for t in range(1, T + 1):
    print('#{}'.format(t))
    N = int(input())
    row_list = []

    for row in range(1, N + 1):
        new_list = []
        for i in range(row):
            if i == 0 or i == row - 1:
                new_list.append(1)
            else:
                new_list.append(row_list[i - 1] + row_list[i])
        print(*new_list)
        row_list = new_list