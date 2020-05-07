def solution(n):
    arr = [0, 1, 2]
    i = 3
    while i <= n :
        arr.append((arr[i-1] + arr[i-2]) % 1000000007)
        i += 1
    return arr[-1]

print(solution(5))