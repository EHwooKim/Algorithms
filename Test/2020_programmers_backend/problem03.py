def make_numbers(d, numbers, tmp, K, used):
    global answer
    if d >= 2:
        if abs(tmp[-1] - tmp[-2]) > K: return
    if d == len(numbers):
        count = 0
        for i in range(len(numbers)):
            if numbers[i] != tmp[i]:
                count += 1
        answer = min(answer, count)

    for i in range(len(numbers)):
        if used & (1 << i): continue
        tmp.append(numbers[i])
        make_numbers(d + 1, numbers, tmp, K, used | (1 << i))
        tmp.pop()


def solution(numbers, K):
    global answer
    answer = 0xffffff
    make_numbers(0, numbers, [], K, 0)
    return answer - 1 if answer != 0xffffff else -1

print(solution([10, 40, 30, 20]	, 20))
print(solution([3, 7, 2, 8, 6, 4, 5, 1], 3))



