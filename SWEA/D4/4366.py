T = int(input())
for t in range(1, T + 1):
    a = input(); A = int(a, 2)
    b = input()
    candi = []
    for i in range(len(a)):
        candi.append(A^(1<<i))
    def check():
        for i in range(len(b)):
            c = ['0', '1', '2']
            for j in c:
                if b[i] == j: continue
                number = int(b[:i] + j + b[i+1:], 3)
                if number in candi:
                    return number
    print("#{} {}".format(t, check()))
