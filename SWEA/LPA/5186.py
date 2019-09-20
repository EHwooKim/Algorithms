def make_bin(f, c):
    if f == 0 :
        return ''    
    if c == 13:
        return '0'
    b = int(f * 2)
    f = f * 2 - b
    return str(b) + make_bin(f, c+1)

T = int(input())

for t in range(1, T + 1):
    f = float(input())
    result = make_bin(f, 1)
    if len(result) >=13:
        result = 'overflow'
    print('#{} {}'.format(t, result))