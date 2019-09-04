# 백준 암호만들기
def select(k, n, used):
    if k >= 2 and ord(arr[order[k-2]]) > ord(arr[order[k-1]]):
        return
    if k == n:
        string = ''
        count = 0
        for i in range(L):
            string += arr[order[i]]
        for s in string:
            if s in 'aeiou':
                count +=1
        if 1 <= count <= L-2:
            result.append(string)
        return
    for i in range(C):
        if used & (1<<i):continue
        order[k] = i
        select(k+1, n, used|1<<i)

L, C = map(int, input().split())
arr = sorted(list(input().split()))
order = [0] * L
result = []
select(0, L, 0)
print(*result, sep='\n')

#----------부분집합으로 풀기
pwd = []
alpha = ('a', 'b', 'i', 'o', 'u')
def backtrack(k, mo, ja):
    if len(pwd) == L:
        print(pwd)
        return
    if k == C: return

    pwd.append(arr[k])
    a = b = 0
    if arr[k] in alpha: a = 1
    else: b = 1
    backtrack(k + 1, mo + a, ja + b)    # k번째 요소를 포함하는 경우
    pwd.pop()

    backtrack(k + 1, mo, ja)    # k번째 요소를 포함하지 않는 경우

L, C = map(int, input().split())
arr = list(input().split())
arr.sort()
backtrack(0, 0, 0)



