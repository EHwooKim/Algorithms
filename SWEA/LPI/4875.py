def check(arr, point):
    x, y = point
    xi = [0, -1, 0, 1]
    yi = [-1, 0, 1, 0]
    for i in range(4):
        if arr[x + xi[i]][y + yi[i]] != 1:
            return x + xi[i], y + yi[i]
    return False


def maze(arr, point_2):
    stack = []
    if check(arr, point_2):
        stack.append(point_2)
        move = check(arr, point_2)
        while stack:
            if check(arr, move):
                stack.append(move)
                arr[move[0]][move[1]] = 1
                move = check(arr, move)
                if arr[move[0]][move[1]] == 3:
                    return 1
            else:
                arr[move[0]][move[1]] = 1
                move = stack.pop()
        return 0


T = int(input())

for t in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, list('1' + input() + '1'))) for _ in range(N)]
    arr = [[1] * (N + 2)] + arr + [[1] * (N + 2)]
    point = 0
    for i in range(N + 2):
        for j in range(N + 2):
            if arr[i][j] == 2:
                point_2 = (i, j)
    print('#{} {}'.format(t, maze(arr, point_2)))