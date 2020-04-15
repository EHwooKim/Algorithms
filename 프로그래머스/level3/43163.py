from collections import deque

def diff_one(word_1, word_2):
    count = 0
    for i in range(len(word_1)):
        if word_1[i] != word_2[i]:
            count += 1
        if count >= 2: return False
    return True
        

def solution(begin, target, words):
    if target not in words:
        return 0
    arr = deque([[begin, 0]])
    while arr:
        a, c = arr.popleft()
        if a == target: return c
        for word in words:
            if diff_one(a, word):
                arr.append([word, c + 1])

print(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
