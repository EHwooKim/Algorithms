def solution(p,s):
    answer = 0
    for i in range(len(p)):
        tmp = abs(int(p[i]) - int(s[i]))
        answer += tmp if tmp <= 5 else 10 - tmp
    return answer

print(solution('82195', '64723'))
print(solution('00000000000000000000', '91919191919191919191'))