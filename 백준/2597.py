N = int(input())
color = []
for _ in range(3):
    color.extend(list(map(int, input().split())))
ruler = list(range(N + 1))
L,R = 0, N  

while color:
    MID = (L + R) / 2  
    c1 = color.pop(0)  
    c2 = color.pop(0) 
    if c1 == c2: continue
    c_mid = (c1 + c2) / 2  
    if c_mid <= MID: 
        for i in range(len(color)):
            if color[i] < c_mid:
                color[i] += (c_mid - color[i]) * 2          L = c_mid 
    elif MID < c_mid:
        for i in range(len(color)):
            if c_mid < color[i]:
                color[i] -= (color[i] - c_mid) * 2
        R = c_mid
print(R-L)