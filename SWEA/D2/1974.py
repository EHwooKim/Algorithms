def check_sudoku():
    sudoku = [list(map(int, input().split())) for _ in range(9)]
    for i in range(9):
        if sum(sudoku[i]) != 45:
            return 0
        sum_col = 0
        for j in range(9):
            sum_col += sudoku[j][i]
        if sum_col != 45:
            return 0
    
    move = [[0, 0], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
    for i in [1, 4, 7]:
        for j in [1, 4, 7]:
            sum_squre = 0
            for m in move:
                sum_squre += sudoku[i + m[0]][j + m[1]]
            if sum_squre != 45:
                return 0

    return 1 

T = int(input())
for t in range(1, T + 1):
    result = check_sudoku()
    print(f'#{t} {result}')
    