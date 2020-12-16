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

