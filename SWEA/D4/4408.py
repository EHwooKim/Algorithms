T = int(input())

for t in range(1, T + 1):
    N = int(input())
    room = [0] * 400

    for n in range(N):
        dpt, arv = map(int, input().split())
        if dpt > arv:     # 이거를 생각 못해서...
            dpt, arv = arv, dpt
        if dpt % 2 == 0:  # 출발점 짝수 -> 홀수
            dpt -= 1
        if arv % 2 == 1:  # 도착점 홀수 -> 짝수
            arv += 1
        for i in range(dpt-1, arv):
            room[i] += 1

    print(room)
    print('#{} {}'.format(t, max(room)))