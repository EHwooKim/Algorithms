













#-------시간------------------------
from itertools import permutations
from collections import deque
N = int(input())
A = deque(list(map(int, input().split()))) # 숫자
B = list(map(int, input().split())) # 덧 뺄 곱 나
C = ['+','-','*','//']
arr = []
for i in range(4):
    arr += [C[i]] * B[i]
symbols = set(permutations(arr))
max_num = -0xffffff
min_num = 0xffffff
for symbol in symbols:
    Q = A.copy()
    for s in symbol:
        x = Q.popleft()
        y = Q.popleft()        
        if s == '//':
            if x * y >= 0:
                Q.appendleft(x//y)
            else:
                x = abs(x)
                y = abs(y)
                Q.appendleft(-(x//y))            
        elif s == '+': Q.appendleft(x+y)
        elif s == '-': Q.appendleft(x-y)
        elif s == '*': Q.appendleft(x*y)
    max_num = Q[0] if Q[0] > max_num else max_num
    min_num = Q[0] if Q[0] < min_num else min_num
print(max_num, min_num, sep='\n')