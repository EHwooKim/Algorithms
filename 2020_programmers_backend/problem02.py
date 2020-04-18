def solution(office, r, c, move):
    n = len(office)
    answer = office[r][c]
    office[r][c] = 0
    direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    l = 0  # 방향

    for m in move:
        if m == 'go':
            dr = r + direction[l][0]
            dc = c + direction[l][1]
            if 0 <= dr < n and 0 <= dc < n and office[dr][dc] != -1:
                r, c = dr, dc
                answer += office[r][c]
                office[r][c] = 0
                

        elif m == 'right':
            l = (l + 1) % 4
            
        elif m == 'left':
            l = l - 1 if l >= 1 else 3

    return answer


print(solution([[5,-1,4],[6,3,-1],[2,-1,1]], 1, 0, ['go','go','right','go','right','go','left','go']))

