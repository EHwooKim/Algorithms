def solution(dataSource, tags):
    tmp = []
    for data in dataSource:
        count = 0
        for tag in tags:
            if tag in data[1:]:
                count += 1
        if count:
            tmp.append([data[0], count])
    tmp = sorted(tmp, key = lambda doc: (-doc[1], doc[0]))

    result = []
    i = 0
    for t in tmp:
        i += 1
        result.append(t[0])
        if i >= 10: break
    return result
