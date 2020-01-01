def prime_sum(k, i, tmp):
    global count
    if tmp > N: return
    if k == 2:
        if tmp == N:
            count += 1; return
        else: return
    for j in range(i, -1, -1):
        prime_sum(k + 1, j, tmp + primes[j])

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    primes = []
    count = 0
    for i in range(2, N + 1):
        for j in range(2, int(i**(1/2)) + 1):
            if not i % j:
                break
        else:
            primes.append(i)
    for i in range(len(primes) - 1, -1, -1):
        prime_sum(0, i, primes[i])
    print(f'#{t} {count}')