total_count = int(input())



for i in range(total_count):
    j = int(input())
    num_list = input().split()
    mode_num = 0
    count = 0
    for num in set(num_list):
        if num_list.count(num) > count:
            count = num_list.count(num)
            mode_num = num
        elif num_list.count(num) == count:
            if num > mode_num:
                mode_num = num

    print(f'#{j} {mode_num}')