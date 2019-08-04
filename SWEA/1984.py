T = int(input())

for t in range(1, T + 1):
    num_list = list(map(int, input().split()))
    num_list.sort()
    
    print(f'#{t} {int(round(sum(num_list[1:-1])/8, 0))}')