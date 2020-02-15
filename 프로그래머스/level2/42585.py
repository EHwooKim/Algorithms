def solution(arrangement):
    answer = 0
    count = 0
    pre_open = False
    for bracket in arrangement:
        if bracket == '(':
            count += 1
            pre_open = True
        else:
            if pre_open == True:
                count -= 1
                answer += count
            else:
                count -= 1
                answer += 1
            pre_open = False
    
    return answer

print(solution('()(((()())(())()))(())'))