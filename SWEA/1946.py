T = int(input())

for t in range(1, T + 1):
    print(f'#{t}')  
    N = int(input())
    result = ''

    for n in range(N):
        Ci, Ki = input().split()
        result += Ci * int(Ki)

    for r in range(len(result)//10):
        word_10 = result[0:10]
        print(word_10)
        result = result[10:]
    
    if result != '':
        print(result)


