def solution(prices):
    answer = []
    n = len(prices)
    for i in range(n):
        k = 0
        for j in range(i + 1, n):
            k += 1
            if prices[j] < prices[i]: break
        answer.append(k)    
    return answer