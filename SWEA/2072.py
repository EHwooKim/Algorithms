count = int(input())

for i in range(1, count + 1):
    num_list = map(int, input().split())
    result = sum([num for num in num_list if num % 2])
    print(f'#{i} {result}')
