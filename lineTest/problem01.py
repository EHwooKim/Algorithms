def solution(inputString):
    tmp = 0
    count = 0
    open = '({[<'
    close = ')}]>'

    for i in inputString:
        if i in open:
            count += 1
            tmp += 1
        elif i in close:
            if tmp <= 0:
                return -1
            tmp -= 1

    answer = -1 if tmp else count

    return answer

print(solution('if } (Count of eggs is 4.) {Buy milk.}	'))