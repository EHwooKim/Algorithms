T = int(input())
for t in range(1, T + 1):
    arr = list(map(int, input().split()))
    result = set()
    for i in range(5):
        for j in range(i + 1, 6):
            for k in range(j + 1, 7):
                result.add(arr[i] + arr[j] + arr[k])
    print(f'#{t} {sorted(result, reverse=True)[4]}')