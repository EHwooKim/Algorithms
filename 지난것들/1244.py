#1244 - 백준
def boy(arr, num):
    i = 1
    while i * num <= len(arr):
        arr[i * num - 1] ^= 1
        i += 1
    return arr


def girl(arr, num):
    index = left = right = num - 1  # 시작 인덱스로
    arr[index] ^= 1
    while left > 0 and right < len(arr) - 1:
        left -= 1
        right += 1
        if arr[left] == arr[right]:
            arr[left] ^= 1
            arr[right] ^= 1
        else:
            break
    return arr


switch = int(input())
arr = list(map(int, input().split()))
S = int(input())  # student

for s in range(S):
    gender, number = map(int, input().split())
    if gender == 1:
        arr = boy(arr, number)
    else:
        arr = girl(arr, number)

for i in range(switch//20 + 1):
    print(*arr[20 * i:20 * (i + 1)])
