N = int(input())
color = []
for _ in range(3):
    color.extend(sorted(list(map(int, input().split()))))
ruler = list(range(0, N + 1))
L,R = 0, N
while color:
    M = (L + R) / 2
    color_left = color.pop(0)
    color_right = color.pop(0)

    if color_left == color_right: continue

    color_mid = (color_left + color_right) / 2
    if color_mid <= M:
        for i in range(len(color)):
            if color[i] < color_mid:
                color[i] += (color_mid - color[i]) * 2
        L = color_mid
    elif M < color_mid:
        for i in range(len(color)):
            if color_mid < color[i]:
                color[i] -= (color[i] - color_mid) * 2
        R = color_mid
print(R-L)

