result=[]
last = int(input())
for num in range(last + 1):
    result.append(str(2**num)) 
# print(*result, sep=' ')

print(' '.join(result))