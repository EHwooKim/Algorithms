T = int(input())

for t in range(1, T + 1):
    numbers = list(input().split())
    info = input()
    num_list = ["ZRO ", "ONE ", "TWO ", "THR ", "FOR ", "FIV ", "SIX ", "SVN ", "EGT ", "NIN "]
    print('#{}'.format(t), end=' ')

    for number in num_list:
        count = numbers.count(number[:-1])
        print(number * count, end='')
