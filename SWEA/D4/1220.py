for t in range(1, 11):
    N = int(input())
    arr = [list(input().split()) for _ in range(100)]
    stack = '*'
    for i in range(100):
        for j in range(100):
            if arr[j][i] != '0':
                stack += arr[j][i]
        stack += '*'
    print('#{} {}'.format(t, stack.count('12')))

#--
for t in range(1, 11):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]
    stack = []
    count = 0
    switch = False
    for i in range(100):
        for j in range(100):
            if arr[j][i] != 0:
                stack.append(arr[j][i])
        stack += '*'

    while stack:
        now = stack.pop()
        if now == 2:
            switch = True
        elif now == 1 and switch:
            count += 1
            switch = False
        elif now == '*':
            switch = False
    print('#{} {}'.format(t, count))