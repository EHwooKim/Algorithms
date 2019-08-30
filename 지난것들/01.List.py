def bubble(arr):
    n = len(arr)
    for j in range(n - 1, 0, -1):
        for i in range(j):  # n - 1 ~ 1
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
    return arr

for t in range(1, 11):
    move = int(input())
    box = list(map(int, input().split()))
    bubble(box)
    for i in range(move):
        box[0] += 1
        box[99] -= 1
        bubble(box)


    print('#{} {}'.format(t, box[99] - box[0]))

