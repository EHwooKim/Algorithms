count = int(input())

num_map = map(int, input().split())
num_list = sorted(list(num_map))

print(num_list[count//2])