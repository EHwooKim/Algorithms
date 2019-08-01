test = int(input())

for t in range(1, test + 1):

    list_size = int(input())
    num_list = list(map(int, input().split()))

    biggest = num_list[0]
    smallest = num_list[0]
    for i in range(list_size):
        biggest = num_list[i] if num_list[i] >biggest else biggest
        smallest = num_list[i] if num_list[i] < smallest else smallest

    print('#{} {}'.format(t, biggest - smallest))





