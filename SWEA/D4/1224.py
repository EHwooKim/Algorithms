for t in range(1, 11):
    N = int(input())
    equation = input()
    stack = []
    equation2 = []
    order = {'*':[2, 2], '/':[2,2], '+':[1, 1], '-':[1, 2], '(':[0, 3]}
    # 후위표기법으로
    for e in equation:
        if e in '0123456789':
            equation2.append(e)
        elif e == ')':
            while stack[-1] !='(':
                equation2.append(stack.pop())
            stack.pop() 
        else:
            if not stack or order[e][1] > order[stack[-1]][0]:
                stack.append(e)
            else:
                while stack and order[stack[-1]][0] >= order[e][1]: #???
                    now = stack.pop() 
                    if now != '(':
                        equation2.append(now)
                stack.append(e) 
    while stack:
        equation2.append(stack.pop()) 
    # 계산    
    stack = []
    for e in equation2:
        if e in'0123456789':
            stack.append(e)
        else:
            a = int(stack.pop())
            b = int(stack.pop())
            if e == '+':
                c = a + b
            elif e == '*':
                c = a * b
            stack.append(c)
    print('#{} {}'.format(t, c))
