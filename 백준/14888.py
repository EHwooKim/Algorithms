# 백준 연산자끼워넣기
def calc(k, now, s):
    y = A[k+1]
    if s == '//':
        if now * y >= 0:
            return now//y
        else:
            x = abs(now)
            y = abs(y)
            return -(x//y)
    elif s == '+': return now+y
    elif s == '-': return now-y
    elif s == '*': return now*y

def haha(k, now, used): # 지금까지 계산된 놈
    global max_num , min_num

    if k == N-1:
        max_num = now if now > max_num else max_num
        min_num = now if now < min_num else min_num     
        return   
    for i in range(N-1): # 숫자-1번 만큼
        if used&(1<<i):continue 
        s = arr[i]
        now_in = calc(k, now, s) # k번째 연산, 지금까지 계산, 연산자
        haha(k+1, now_in, used|1<<i)

N = int(input())
A = list(map(int, input().split())) # 숫자
B = list(map(int, input().split())) # 덧 뺄 곱 나
C = ['+','-','*','//']
arr = []
for i in range(4):
    arr += [C[i]] * B[i]
max_num = -1000000001
min_num = 1000000001


haha(0, A[0], 0)
print(max_num, min_num, sep='\n')


#-------시간------------------------
from itertools import permutations
from collections import deque
N = int(input())
A = deque(input().split()) # 숫자
B = list(map(int, input().split())) # 덧 뺄 곱 나
C = ['+','-','*','//']
arr = []
for i in range(4):
    arr += [C[i]] * B[i]
symbols = set(permutations(arr))
result =[]
for symbol in symbols:
    Q = A.copy()
    for s in symbol:
        if s == '//':
            x = Q.popleft()
            y = Q.popleft()
            if int(x) * int(y) >= 0:
                Q.appendleft(str(eval(x+s+y)))            
            else:
                x = str(abs(int(x)))
                y = str(abs(int(y)))
                Q.appendleft(str(-eval(x+s+y)))            
        else:
            x = Q.popleft()
            y = Q.popleft()
            Q.appendleft(str(eval(x+s+y)))            
    result.append(int(Q[0]))
print(max(result))
print(min(result))