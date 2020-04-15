answer = 0

def make_number(k, arr, tmp, target):
    global answer
    if k == len(arr):
        if tmp == target:
            answer += 1; return
        else: return
    make_number(k + 1, arr, tmp + arr[k], target)
    make_number(k + 1, arr, tmp - arr[k], target)

def solution(numbers, target):
    global answer
    make_number(0, numbers, 0, target)
    return answer

print(solution([1, 1, 1, 1, 1], 3))