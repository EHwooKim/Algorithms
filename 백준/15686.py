# 백준 치킨배달
from itertools import combinations

N, M = map(int, input().split())
home = []
chicken =[]
for i in range(N):
    x = input().split()
    for j in range(N):
        if x[j] == '1':
            home.append((i, j))
        elif x[j] == '2':
            chicken.append((i, j)) # 입력

dis = [[] for _ in range(len(home))]
for h in range(len(home)):
    for c in chicken:
        d = abs(home[h][0] - c[0])  + abs(home[h][1] - c[1])
        dis[h].append(d)
cand = list(combinations(range(len(chicken)), M))
result_list = []
for c in cand:
    result = 0
    for d in dis:
        num = 2 * N
        for i in c:
            num = d[i] if d[i] < num else num
        result += num
    result_list.append(result)
print(min(result_list))




