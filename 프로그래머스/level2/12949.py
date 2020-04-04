def solution(arr1, arr2):
    a, b, c = len(arr1), len(arr1[0]), len(arr2[0])
    result = [[0] * c for _ in range(a)]

    for i in range(a):
        for j in range(c):
            for k in range(b):
                result[i][j] += arr1[i][k] * arr2[k][j]

    return result