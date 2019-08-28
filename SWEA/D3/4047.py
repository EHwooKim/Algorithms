def check(card):
    for i in range(len(cards)//3):
        tp = cards[i*3]
        num = int(cards[i*3+1:i*3+3])
        if tp == 'S':
            if visit[0][num] == 0:
                return 'ERROR'
            else: visit[0][num] = 0
            count[0] -= 1
        elif tp == 'D':
            if visit[1][num] == 0:
                return 'ERROR'
            else: visit[1][num] = 0
            count[1] -= 1
        elif tp == 'H':
            if visit[2][num] == 0:
                return 'ERROR'
            else: visit[2][num] = 0
            count[2] -= 1
        elif tp == 'C':
            if visit[3][num] == 0:
                return 'ERROR'
            else: visit[3][num] = 0
            count[3] -= 1         
    return '{} {} {} {}'.format(*count)
            

T = int(input())
for t in range(1, T + 1):
    cards = input()
    count = [13] * 4
    visit = [[1]*14 for _ in range(4)]
    print('#{} {}'.format(t, check(cards)))







# #---
# def check(cards):
#     for i in range(len(cards)//3):
#         if cards.count(cards[i*3:(i+1)*3])>=2:    
#             return 'ERROR'
#     return '{} {} {} {}'.format(13-cards.count('S'), 13-cards.count('D'), 13-cards.count('H'), 13-cards.count('C'))

# T = int(input())
# for t in range(1, T + 1):
#     cards = input()
#     print('#{} {}'.format(t, check(cards)))