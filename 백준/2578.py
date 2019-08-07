# 백준 2578
table = [list(map(int, input().split())) for _ in range(5)]
numbers=[]
for _ in range(5):
    numbers.extend(list(map(int, input().split())))
count = 0

def matrix_sum(matrix):
    zero_count = 0
    for i in range(5):
        sum_row = sum(matrix[i])
        if sum_row == 0:
            zero_count += 1
    for i in range(5):
        sum_col = 0
        for j in range(5):
            sum_col += matrix[j][i]
        if sum_col == 0:
            zero_count += 1
    sum_dia = 0
    sum_dia_2 = 0
    for i in range(5):
        sum_dia += matrix[i][i]
        sum_dia_2 += matrix[i][4-i]
    if sum_dia == 0:
        zero_count +=1
    if sum_dia_2 == 0:
        zero_count +=1
    return zero_count

for num in numbers:
    count += 1
    for i in range(5):
        for j in range(5):
            if table[i][j] == num:
                table[i][j] = 0
    zero_count = matrix_sum(table)
    if zero_count >= 3:
        break
print(count)




























