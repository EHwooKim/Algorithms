test = int(input())

for i in range(1, test+1):
    num = int(input())
    x={2: 0, 3: 0, 5: 0, 7: 0, 11: 0}

    while num > 1:
        for key in x:
            if num % key == 0:
                num /= key
                x[key] += 1
                
    print(f'#{i} {x[2]} {x[3]} {x[5]} {x[7]} {x[11]}')

#-----------------------------------
def CPW(num, a, b, c, d, e):
    if num == 1:
        return a, b, c, d, e
    if num % 2 == 0:
        num /= 2
        a += 1
    elif num % 3 == 0:
        num /= 3 
        b +=1
    elif num % 5 == 0:
        num /= 5
        c += 1
    elif num % 7 == 0:
        num /= 7
        d += 1
    elif num % 11 == 0:
        num /= 11
        e += 1
    return CPW(num, a, b, c, d, e)


test = int(input())

for i in range(1, test+1):
    a = b = c = d = e = 0
    num = int(input())
    a, b, c, d, e = CPW(num, a, b, c, d, e)
    print(f'#{i} {a} {b} {c} {d} {e}')
