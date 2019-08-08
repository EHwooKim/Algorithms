# 이진 탐색
def bin_search(p, s):
    l = 1
    count = 0
    while True:
        count += 1
        c = (l + p) // 2
        if s < c:
            p = c
        elif c < s:
            l = c
        else:
            return count


T = int(input())
for t in range(1, T + 1):
    P, A, B = map(int, input().split())
    count_A = bin_search(P, A)
    count_B = bin_search(P, B)

    if count_A > count_B:
        winner = 'B'
    elif count_A < count_B:
        winner = 'A'
    else: winner = 0

    print('#{} {}'.format(t, winner))


