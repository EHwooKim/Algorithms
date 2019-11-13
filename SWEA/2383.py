def calc_dis(p, x, y):
    for i in range(len(p)):
        distance[0].append(abs(p[i][0]-x[0]) + abs(p[i][1]-x[1]))
        distance[1].append(abs(p[i][0]-y[0]) + abs(p[i][1]-y[1]))

def let_it_go(n):
    if n == len(people):
        time(goal)
        return
    for h in [0, 1]:
        goal[n] = h
        let_it_go(n + 1)

def time(goal):
    global MIN
    total_time = [[], []]
    for i in range(len(goal)):
        if goal[i]:
            total_time[1].append([distance[1][i], stairs_value[1] + distance[1][i] + 1])
        else:
            total_time[0].append([distance[0][i], stairs_value[0] + distance[0][i] + 1])
    for k in range(2):
        if len(total_time[k]) > 3:
            helpme(total_time[k])
    result_cand = 0
    for k in range(2):
        total_time[k].sort(key=lambda x : x[1]) 
        if total_time[k]:
            result_cand = max(result_cand, total_time[k][-1][1])
    MIN = min(MIN, result_cand)

def helpme(array):
    array.sort()
    for i in range(3, len(array)):
        count = 0
        for j in range(i-3, i):
            if array[j][1] > array[i][0]:
                count += 1
        if count == 3:
            array[i][1] += (array[i-3][1]-array[i][0]-1)


T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    people = []
    stairs = []
    stairs_value = []
    distance = [[], []]
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 1:
                people.append([i, j])
            elif arr[i][j] > 1:
                stairs.append([i, j])
                stairs_value.append(arr[i][j])
    calc_dis(people, stairs[0], stairs[1])
    goal = [0] * len(people)
    MIN = 0xffffff
    let_it_go(0)
    print('#{} {}'.format(t, MIN))