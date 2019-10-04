# 못풀겠다고 합니다...

def possible(number):
    for n in number:
        if n not in arr:
            return False
    return True

def ssafy(k, number, goal, count):
    global MIN
    if k >= len(str(goal)): return
    if k >= 1 and number not in ['', '0', '00', '000', '0000', '00000', '000000', '1']:
        goal, y = divmod(goal, int(number))
        if not goal or y: return
        if possible(str(goal)):
            MIN = min(MIN, count + len(str(goal))); return # TODO 여기서 return을 해야할지 계속 나아가야할지
            
        ssafy(k, number, goal, count + 1 + k)
        for i in range(len(arr)):
            ssafy(k+1, number + arr[i], goal, count + 1 + (k+1))            
    else:
        for i in range(len(arr)):
            ssafy(k+1, number + arr[i], goal, count + 1 + (k+1))

T = int(input())
for t in range(1, T + 1):
    a = list(map(int, input().split()))
    goal = int(input())
    arr = []
    MIN = 0xffffff
    for i in range(10):
        if a[i]: arr.append(str(i)) # 사용 가능한 숫자들 모음
    if possible(str(goal)):
        MIN = len(str(goal))        
    else:
        ssafy(0, '', goal, 0)
    MIN = -2 if MIN == 0xffffff else MIN
    print('#{} {}'.format(t, MIN+1))
