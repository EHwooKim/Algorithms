def back(s,day):
    global Max
    if day >= N:
        Max = max(s, Max)
    else:
        if day+T[day] <= N:
            back(s+P[day],day+T[day])
        back(s,day+1)
​
N = int(input())
T, P =[],[]
Max = 0
for _ in range(N):
    t,p = map(int,input().split())
    T.append(t)
    P.append(p)
back(0,0)
print(Max)