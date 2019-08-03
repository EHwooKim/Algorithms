T = int(input())
for t in range(1, T + 1):
    print(f'#{t}')
    N = int(input())
    row_list = []
    new_list = []

    for row in range(1, N + 1):
        for i in range(row):
            if i == 0 or i == row - 1:
                new_list.append(1)
            else:
                new_list.append(row_list[i - 1] + row_list[i])
        print(*new_list, sep = ' ')
        row_list = new_list
        new_list = []    


                
        
