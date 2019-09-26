#---- 이거는 백트래킹 ----
coins = [6, 4, 1]
choose = [] # 굳이 필요없지만 어떻게 진행되는지 궁금하니 넣은 배열
MIN = 0xffffff
def coinChange(k, n): # k: 선택한 동전수, n: 거스름돈 금액
    global MIN
    if k >= MIN: return
    if n == 0:
        if MIN > k:
            MIN = k
            print(MIN, choose)
    else:
        for coin in coins:
            if coin > n: continue
            choose.append(coin)
            coinChange(k + 1, n - coin)
            choose.pop()
coinChange(0, 80)
#---- DP를 이용한 방법 ----
coins = [6, 4, 1]
choose = [] # 굳이 필요없지만 어떻게 진행되는지 궁금하니 넣은 배열
# 메모리제이션까지 추가
memo =[-1] * 100
def coinChange2(n): # n: 매개변수, 문제의 크기(식별), 반환값: 문제의 해
    if n == 0: return 0
    # 메모리제이션까지 추가
    if memo[n] != -1: return memo[n]
    MIN = 0xffffff
    for coin in coins:
        if coin > n: continue
        ret = coinChange2(n - coin) + 1
        if ret < MIN: MIN = ret
    memo[n] = MIN
    return MIN

print(coinChange2(80))

#---- for문으로 더 잘 표현하기 ----
# 지금까지는 결국 밑에 것들 다 호출하고 위로 하나씩 계산하며 올라오는 방식이었는데 이번에는 반대로 해보자
# 밑에서 위로 간다는 느낌으로. 이렇게하면 중복되는 일을 안하게 할 수 있다.

coins = [6, 4, 1]
choose = [] # 굳이 필요없지만 어떻게 진행되는지 궁금하니 넣은 배열
memo =[-1] * 100
def coinChange3(n):
    memo[0] = 0
    for i in range(1, n + 1):  # i: 문제를 나타내는 값.
        MIN = 0xffffff
        for coin in coins:
            if coin > i: continue
            ret = memo[i - coin] + 1
            if ret < MIN: MIN = ret
        memo[i] = MIN
    return memo[n]

print(coinChange3(80))
