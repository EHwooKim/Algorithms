T = int(input())

for t in range(1, T + 1):
    equation = list(input().split())
    stack = []
    calc = a = b = 0

    for e in equation:
        if e.isdecimal():
            stack.append(e)
        elif e == '.' :
            if calc:
                if len(stack) >= 2:
                    print('#{} {}'.format(t, 'error'));break
                else:
                    print('#{} {}'.format(t, calc)); break
            else:
                print('#{} {}'.format(t, 'error')); break
        else :
            if len(stack) < 2:
                print('#{} {}'.format(t, 'error')); break
            else:
                b = int(stack.pop())
                a = int(stack.pop())
                if e == '+':
                    calc = a + b
                elif e == '-':
                    calc = a - b
                elif e == '/':
                    calc = a // b
                elif e == '*':
                    calc = a * b
                stack.append(calc)
