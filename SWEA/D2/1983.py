grade = ['D0', 'C-', 'C0', 'C+', 'B-', 'B0', 'B+', 'A-', 'A0', 'A+']
T = int(input())
for t in range(1, T + 1):
    N, K = map(int, input().split())
    result = []

    for i in range(N):
        m, f, h = map(int, input().split())
        result.append(m * 0.35 + f * 0.45 + h * 0.20)

    student = result[K - 1]
    result.sort()
    rank = result.index(student)

    print(f'#{t} {grade[int(rank // (N/10))]}')    
