T = int(input())

for t in range(1, T + 1):
    print('#{}'.format(t), end=' ')
    str2 = input() # 패턴 
    str1 = input() # 문자열
    n, m = len(str1), len(str2)
    i = j = 0
    while i < n and j < m:
        if str1[i] == str2[j]:
            i += 1
            j += 1
        else:
            i = i - j + 1
            j = 0
    if j == m:
        print(1)
    else:
        print(0)

