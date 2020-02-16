N, S = map(int, input().split())
numbers = list(map(int, input().split()))
count = 0

# 01.
for n in range(1, 2 ** N):
   tmp = 0
    for i in range(N):
        if n & ( 1<< i ):
            tmp += numbers[i]
    if tmp == S: 
        count += 1
print(count) 

# 02.
def mySum(start_index, tmp):
    global count
    if start_index >= 1 and tmp == S:
        count += 1
    if start_index == N: return


    for i in range(start_index, N):
        mySum(i + 1, tmp + numbers[i])

mySum(0, 0)
print(count)


