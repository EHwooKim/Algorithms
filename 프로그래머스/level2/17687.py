def make_natation(number, base):
    notion = '0123456789ABCDEF'
    m, n = divmod(number, base)
    N = notion[n]
    return make_natation(m, base) + N if m else N

def solution(n, t, m, p):
    result = ''
    tmp = '0'
    i = 1
    while len(tmp) < (m * t + (p - 1)): 
        tmp += make_natation(i, n)
        i += 1 
    for i in range(t):
        result += tmp[m * i + (p - 1)]
    return result

print(solution(16, 16, 2, 2))

