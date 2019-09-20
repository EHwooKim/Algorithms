def make_bin(n):
    if n == 0:
        return ''
    n, b = divmod(n, 2)
    return make_bin(n)+str(b)

T = int(input())
for t in range(1, T + 1):
    N, H = input().split()
    arr = '0123456789ABCDEF'
    result = ''
    for h in H:
        b = make_bin(int(arr.index(h)))
        b = (4 - len(b))*'0' + b
        result += b
    print('#{} {}'.format(t, result))

