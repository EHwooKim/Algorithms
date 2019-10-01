# def score(k, s):
#     total.update({s})
#     for i in range(k, N):
#         score(i+1, s+arr[i])
# T = int(input())
# for t in range(1, T + 1):
#     N = int(input())
#     arr = list(map(int, input().split()))
#     total = set()
#     score(0, 0)
#     print('#{} {}'.format(t, len(total)))

#---------------

def backtrack(k, s): # k: 트리의 높이, 문항번호. s: 지금까지 점수합
    global cnt
    if visit[k][s]:
        return
    visit[k][s] = 1
    if k == N:
        cnt += 1
        return
    else:
        backtrack(k + 1, s)     # k번 문제 틀린 경우
        backtrack(k + 1, s + arr[k])    # k번 문제 맞은 경우

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = list(map(int, input().split()))
    visit = [[0] * (N * 100 + 1) for _ in range(N + 1)]
    cnt = 0
    backtrack(0, 0) 
    print('#{} {}'.format(t, cnt))

#------


T = int(input())
for t in range(1, T + 1):
    N = int(input())
    arr = list(map(int, input().split()))
    visit = [0] * 100001
    visit[0] = 1
    for a in arr:
        for i in range(10000, -1, -1):
            if visit[i]:
                visit[i + a] = 1
    print('#{} {}'.format(t, visit.count(1)))

