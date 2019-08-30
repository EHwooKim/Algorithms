def paper(n):
    case = [1, 3]
    for i in range(1, n - 1):
        if i%2:
            case.append(2 * case[i] - 1)
        else:
            case.append(2 * case[i] + 1)
    return case[n-1]

T = int(input())

for t in range(1, T + 1):
    N = int(input())//10
    print('#{} {}'.format(t, paper(N)))