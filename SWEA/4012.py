from itertools import combinations
T = int(input())
for test in range(1, T +1):
    N = int(input())
    S = [list(map(int, input().split())) for _ in range(N)]
    subset = list(combinations(list(range(N)), N//2))
    MIN = 0xffffff
    for t in range(len(subset)//2):
        menu_1, menu_2 = subset[t], subset[-1-t]
        taste_1 = taste_2 = 0
        for i in range(N//2-1):
            for j in range(i + 1, N//2):
                taste_1 += S[menu_1[i]][menu_1[j]] + S[menu_1[j]][menu_1[i]]
                taste_2 += S[menu_2[i]][menu_2[j]] + S[menu_2[j]][menu_2[i]]
        taste_sub = abs(taste_1 - taste_2)
        MIN = min(MIN, taste_sub)
    print(f'#{test} {MIN}')