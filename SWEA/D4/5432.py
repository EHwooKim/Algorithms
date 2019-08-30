T = int(input())

for t in range(1, T + 1):
    stick = input()
    switch = 0
    count = 0
    result = 0
    for s in stick:
        if s == '(':
            count += 1
            switch = 1
        else:
            count -= 1
            if switch == 1:
                result += count
            else:
                result += 1
            switch = 0
    print('#{} {}'.format(t, result))

            

