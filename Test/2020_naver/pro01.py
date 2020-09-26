def solution(n, p, c):
  price = 100
  stock = 0
  total = {'money': 0, 'day': n}

  for i in range(len(p)):
    if p[i] + stock >= c[i]:
      total['money'] += c[i] * price
      stock = p[i] + stock - c[i]
      price = 100
    else:
      if price == 25:
        total['day'] = i + 1
        break
      price = price / 2
      stock += p[i]
  average = round(total['money'] / total['day'], 2)
  return '%.2f'%average