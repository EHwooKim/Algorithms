count = int(input())

for i in range(1, count + 1):
    P, Q, R, S, W = map(int, input().split())
    if W <=R:
        money = P * W if P * W < Q else Q
    else:
        money = P * W if P * W < Q + (W - R) * S else Q + (W - R) * S

    print(f'#{i} {money}')