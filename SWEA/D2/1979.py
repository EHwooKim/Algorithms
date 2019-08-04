T = int(input())

for t in range(1, T + 1):
    N, K = map(int, input().split())
    N_list = []
    for n in range(N):
        N_list.append(list(map(int, input().split())))
    
    reuslt_1 = ''
    for n in range(N):
        for num in map(str, N_list[n]):
            reuslt_1 += num 
        reuslt_1 += '&'
    
    result_2 = ''
    for n in range(N):
        for m in range(N):
            result_2 += str(N_list[m][n])
        result_2 += '&'
    count = reuslt_1.count('1'*K) + result_2.count('1'*K)  
    if K < N: count -= reuslt_1.count('1'*(K + 1)) + result_2.count('1'*(K + 1))
    

    
    print(f'#{t} {count}')