T = int(input())
for t in range(T):
    N = int(input())
    card = input()
    card_count = [0] * 10

    for c in card:
        card_count[int(c)] += 1

    num, count = 0, card_count[0]
    for i in range(10):
        if card_count[i] >= count:
            num, count = i, card_count[i]

    print('#{} {} {}'.format(1, num, count))

