test = int(input())

for i in range(1, test+1):
    test_people = int(input())
    test_stone = map(int, input().split())
    
    stone_distance = list(map(abs, test_stone))
    closer_stone = min(stone_distance)
    print(f'#{i} {closer_stone} {stone_distance.count(closer_stone)}')
