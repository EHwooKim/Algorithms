T = int(input())

for t in range(1, T + 1):
    string = input()
    stack = []
    for s in string:
        if not stack or stack[-1] != s:
            stack.append(s)
        elif stack[-1] == s:
            stack.pop()
    print('#{} {}'.format(t, len(stack)))
