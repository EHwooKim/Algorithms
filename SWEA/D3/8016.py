# def odd_print(num):
#     count = 0
#     last_num = 0
#     for i in range(num):
#         count += 2 * i + 1
#         last_num = 2 * i + 1
#     pre_count = count - last_num
#     left = 2 * (pre_count + 1) - 1
#     right = 2 * count -1
#     return f'#{num} {left} {right}'

def odd_print(num):
    count = 0
    last_num = 0
    for i in range(num):
        count += 2 * i + 1
        last_num = 2 * i + 1
        pre_count = count - last_num
        left = 2 * (pre_count + 1) - 1
        right = 2 * count -1
        print(f'#{num} {left} {right}')

# print(odd_print(1))
# print(odd_print(2))
print(odd_print(3))
# print(odd_print(4))