def check(array):
    end = 0
    number = ['0001101','0011001','0010011','0111101','0100011','0110001','0101111','0111011','0110111','0001011']
    result = 0
    veri = 0
    for i in range(M-1,-1, -1):
        if array[i] == '1':
            end = i; break
    bi_str = array[end-55:end+1]
    for i in range(8):
        if bi_str[i*7:(i+1)*7] not in number:
            return 0
        else:
            x = number.index(bi_str[i*7:(i+1)*7])
            if i == 7:
                veri += x
            else:
                if not i%2:
                    veri += x * 3
                else: veri += x
        result += x
    if veri%10 == 0:
        return result
    else: return 0


T = int(input())
for t in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [input() for _ in range(N)]
    for i in range(N):
        if '1' in arr[i]:
            print('#{} {}'.format(t, check(arr[i])))
            break
