T = int(input())
for t in range(1, T + 1):
    number, count = input().split()
    n, count = len(number), int(count)
    result = [{number}] + [set() for _ in range(count)]

    for k in range(count):
        for num in result[k]:
            for i in range(n):
                for j in range(i+1, n):
                    result[k+1].add(num[:i]+num[j]+num[i+1:j]+num[i]+num[j+1:])
    print('#{} {}'.format(t, max(map(int, result[count]))))
