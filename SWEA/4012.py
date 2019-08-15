def make_subset(arr ,c):  # 원소가 c개인 부분집합 만들기
    subset=[]
    for i in range(1 << len(arr)):
        result = []
        count = 0
        for j in range(len(arr)):
            if i & (1 << j):
                result.append(arr[j])
                count += 1
        if count == c:
            subset.append(result)
    return subset
    
T = int(input())
for test in range(1, T +1):
    N = int(input()) 
    S = [list(map(int, input().split())) for _ in range(N)]

    subset = make_subset(list(range(N)), N//2)

    taste_list=[]
    for t in range(len(subset)//2):
        menu_1, menu_2 = subset[t], subset[-1-t]
        menu_1_taste = menu_2_taste = 0
        for i in range(len(menu_1)-1):
            for j in menu_1[i+1:]:
                menu_1_taste += S[menu_1[i]][j]
                menu_1_taste += S[j][menu_1[i]]
        for i in range(len(menu_2)-1):
            for j in menu_2[i+1:]:
                menu_2_taste += S[menu_2[i]][j]
                menu_2_taste += S[j][menu_2[i]]

        taste_sub = abs(menu_1_taste - menu_2_taste)
        taste_list.append(taste_sub)

    print(f'#{test} {min(taste_list)}')
