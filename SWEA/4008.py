def calc(a,b):      # a = 여태까지 계산한 값 , b = 사용한 연산자 갯수
    global MIN,MAX
    if b == N:
        MAX = max(MAX, a)
        MIN = min(MIN, a)
        return
    for i in range(4):
        if operators[i] != 0:
            operators[i] -= 1
            if i == 0:
                calc(a+numbers[b], b+1)
            elif i == 1:
                calc(a - numbers[b], b+1)
            elif i == 2:
                calc(a * numbers[b], b+1)
            else:
                calc(int(a / numbers[b]), b+1)
            operators[i] += 1

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    operators = list(map(int, input().split()))
    numbers = list(map(int, input().split()))
    operator_set = set() 
    MIN = 100000001
    MAX = -100000001    
    calc(numbers[0], 1)
    print('#{} {}'.format(t, MAX-MIN))
