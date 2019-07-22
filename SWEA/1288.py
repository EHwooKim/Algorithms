test = int(input())

for t in range(1, test + 1):
    sheep = input()
    count = 0
    N = 1
    check_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    while check_list != []:
        sheep_N = int(sheep) * N
        for i in str(sheep_N):
            if i in check_list:
                check_list.remove(i)
            
        count += 1
        N += 1
    print(f'#{t} {count}')
    