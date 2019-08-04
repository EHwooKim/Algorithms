count = int(input())

for i in range(1, count + 1):
    num_list = map(int, input().split())
    print(f'#{i} {int(round(sum(num_list)/10,0))}')