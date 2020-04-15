def solution(n, computers):
    global arr, visited
    arr = [[] for _ in range(n)]
    visited = [True] * n
    answer = 0
    for i in range(n):
        for j in range(n):
            if i != j and computers[i][j]:
                arr[i].append(j)
    for i in range(n):
        if visited[i]:
            visited[i] = False
            answer += 1
            n_arr = arr[i]
            while n_arr:
                a = n_arr.pop(0)
                if visited[a]:
                    visited[a] = False
                    n_arr.extend(arr[a])
    return answer

print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
print(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))