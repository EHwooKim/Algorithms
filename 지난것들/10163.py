# 백준 10163 색종이
table = [[0]*101 for _ in range(101)]

N = int(input())
for n in range(1, N + 1):
    x, y, w, h = map(int, input().split())

    for i in range(x, x + w):
        for j in range(y, y + h):
            table[i][j] = n

for n in range(1, N + 1):
    count = 0
    for i in range(101):
        for j in range(101):
            if table[i][j] == n:
                count += 1
    print(count)
