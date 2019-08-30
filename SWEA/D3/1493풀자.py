T = int(input())

for t in range(1, T + 1):
    p, q = map(int, input().split())
    
    value = (p*(p+1))//2
    
    for i in range(y-1):
        value += x + i
    