def solution(answer_sheet, sheets):
    n = len(sheets)
    max_jisoo = 0
    for i in range(n):
        for j in range(i + 1, n):
            first, second = sheets[i], sheets[j]
            count = 0
            tmp = 0
            max_tmp = 0
            for k in range(len(answer_sheet)):
                if first[k] == second[k]:
                    if answer_sheet[k] != first[k]:
                        count += 1
                        tmp += 1
                        max_tmp = max(tmp, max_tmp)
                    else:
                        tmp = 0
                elif first[k] != second[k]:
                    tmp = 0

            jisoo = count + max_tmp ** 2
            max_jisoo = max(jisoo, max_jisoo)

    return max_jisoo
