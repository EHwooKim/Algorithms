'''1부터 주어진 숫자만큼 모두 더한 값을 출력하시오.

단, 주어질 숫자는 10000을 넘지 않는다.'''


num = int(input())
result = 0
for i in range(num+1):
    result += i
print(result)

#----
num = int(input())
print(sum([i for i in range(num+1)]))