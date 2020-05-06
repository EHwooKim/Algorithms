def calc_max_length(road):
    tmp = 0
    max_tmp = 0
    for r in road:
        if r == '1':
            tmp += 1
        else:
            max_tmp = max(tmp, max_tmp)
            tmp = 0
    max_tmp = max(tmp, max_tmp)
    return max_tmp

def solution(road, n):
    road = list(road)
    max_length = 0
    for i in range(len(road)):
        if road[i] == '0':
            count = 0
            tmp = []
            for j in range(i, len(road)):
                if road[j] == '0':
                    road[j] = '1'
                    tmp.append(j)
                    count += 1
                if count == n:
                    break
            max_length = max(max_length, calc_max_length(road))
            for t in tmp:
                road[t] = '0'

    return max_length
            

print(solution("111011110011111011111100011111", 3))

