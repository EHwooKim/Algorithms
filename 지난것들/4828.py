test = int(input())

for t in range(1, test + 1):

    list_size = int(input())
    num_list = list(map(int, input().split()))

    max_num = num_list[0]
    min_num = num_list[0]
    for i in range(list_size):
        max_num = num_list[i] if num_list[i] >max_num else max_num
        min_num = num_list[i] if num_list[i] < min_num else min_num

    print('#{} {}'.format(t, max_num - min_num))





