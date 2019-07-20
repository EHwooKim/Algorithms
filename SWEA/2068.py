# count = int(input())

# for i in range(1, count+1):
#     num_list = map(int, input().split())
#     print(f'#{i} {max(num_list)}')


#--------


count = int(input())

for i in range(1, count + 1):
    num_list = list(map(int, input().split()))
    max_num = num_list[0]
    for num in num_list:
        if num > max_num:
            max_num = num

    print(f'#{i} {max_num}')
