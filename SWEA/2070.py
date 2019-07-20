count = int(input())

for i in range(1, count + 1):
    something = '='
    num1, num2 = map(int, input().split())
    if num1 > num2:
        something = '>'
    elif num1 < num2:
        something = '<'
    print(f'#{i} {something}')
        