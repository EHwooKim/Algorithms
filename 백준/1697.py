# 백준 숨바꼭질
def catch(start, end):
    path = [start]
    D = [0]*100001
    result = []
    while path:
        x = path.pop(0)
        if x == end:
            result.append(D[x])
        else:
            if 0 <= x-1:
                if D[x-1] > D[x] + 1 or D[x-1] == 0:
                    path.append(x-1)
                    D[x-1] = D[x] + 1
            if 0 <= x+1 <= end + 1:
                if D[x+1] > D[x] + 1 or D[x+1] == 0:
                    path.append(x+1)
                    D[x+1] = D[x] + 1
            if 0 <= 2*x <= end + 1:
                if D[2*x] > D[x] + 1 or D[2*x] == 0:
                    path.append(2*x)
                    D[2*x] = D[x] + 1                    
    return min(result)

N, K = map(int, input().split())
print(catch(N, K))

#---------------------
