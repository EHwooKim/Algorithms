T = int(input())
for t in range(1, T + 1):
    print(f'#{t}')
    N = int(input())
    i = j = 0
    min_num = 0
    max_num = N - 1
    count = 1
    result = [[0]*N for i in range(N)]


    while count <= N**2 - 1:
        while j < max_num:
            result[i][j] = count
            j += 1
            count += 1
        while i < max_num:
            result[i][j] = count
            i += 1
            count += 1
        max_num -= 1
        while j > min_num:
            result[i][j] = count
            j -= 1
            count += 1
        min_num += 1
        while i > min_num:
            result[i][j] = count
            i -= 1
            count +=1
    result[i][j] = count
    for n in range(N):
        print(*result[n], sep = ' ')
