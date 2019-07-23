test = int(input())

for t in range(1, test + 1):
    sheep = input()
    N = 0
    check_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    while check_list != []:
        N += 1
        sheep_N = int(sheep) * N
        for i in str(sheep_N):
            if i in check_list:
                check_list.remove(i)
                print(check_list)
            
        
    print(f'#{t} {N*int(sheep)}')