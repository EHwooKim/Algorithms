from collections import deque

def check_height(arr, num):
    global count
    check_arr = deque([num])
    while check_arr:
        a = check_arr.popleft()
        for n in arr[a]:
            if visit[n]:
                check_arr.append(n)
                count += 1
                visit[n] = False

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    M = int(input())
    arr_straight = [[] for _ in range(N + 1)]
    arr_reverse = [[] for _ in range(N + 1)]
    result = 0
    for _ in range(M):
        a, b = map(int, input().split())
        arr_straight[a].append(b)
        arr_reverse[b].append(a)
    for i in range(1, N + 1):
        count = 1
        visit = [True] * (N + 1)
        check_height(arr_straight, i)
        check_height(arr_reverse, i)
        if count == N:
            result += 1
    print('#{} {}'.format(t, result))