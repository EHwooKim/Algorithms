def makeSequence(n, sequence):
    global result, check
    if check: return
    l = len(sequence)
    for i in range(1, l//2 + 1):
        if sequence[-i:] == sequence[-2*i:-i]: return
    if n == N:
        check = True
        result = sequence ; return
    for s in numbers:
        makeSequence(n+1, sequence + s)

N = int(input())

numbers = ['1', '2', '3']
result = ''
check = False

makeSequence(0, '')
print(result)