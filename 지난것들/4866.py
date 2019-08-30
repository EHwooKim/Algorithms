def check(string):
    paren = {'{':'}','(':')'}
    stack = []
    for s in string:
        if s in paren.keys():
            stack.append(s)
        elif s in paren.values():
            if len(stack) == 0 or paren[stack.pop()] != s:
                return 0
    if len(stack) > 0:
        return 0
    return 1
            
            
T = int(input())

for t in range(1, T + 1):
    string = input()
    print('#{} {}'.format(t, check(string)))