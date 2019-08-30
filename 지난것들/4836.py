#4836. 색칠하기
T = int(input())

for t in range(1, T + 1):
    table = [[0]*10 for _ in range(10)]
    N = int(input())
    count_c = 0
    for n in range(N):
        li, lj, ri, rj, c = map(int,input().split())
        for i in range(li, ri + 1):
            for j in range(lj, rj + 1):
                table[i][j] += c
                if table[i][j] == 3:
                    count_c += 1

    print('#{} {}'.format(t, count_c))