def RSP(a,b):
    if card[a] == card[b]:
        return a
    elif card[a] == 1:
        return b if card[b]==2 else a
    elif card[a] == 2:
        return b if card[b]==3 else a
    elif card[a] == 3:
        return b if card[b]==1 else a


def game(arr):
    if len(arr) == 1:
        return arr[0]

    return RSP(game(arr[:(len(arr)+1)//2]), game(arr[(len(arr)+1)//2:]))


T = int(input())
for t in range(1, T + 1):
    N = int(input())
    card = list(map(int, input().split()))
    index_arr = list(range(N))

    print('#{} {}'.format(t, game(index_arr)+1))
